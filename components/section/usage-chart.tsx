import { UsageHistoryData } from "@/interfaces/usage";
import { Text, View } from "react-native";

interface DailyUsage {
  day: string;
  usage: number;
}

interface UsageChartProps {
  data: UsageHistoryData[];
}

export const UsageChart = ({ data }: UsageChartProps) => {
  // Define all days of the week
  const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Aggregate usage by day
  const dailyUsageMap = new Map<string, number>();
  
  // Initialize all days with 0
  dayOrder.forEach((day) => {
    dailyUsageMap.set(day, 0);
  });
  
  // Add actual usage data
  data.forEach((record) => {
    const currentUsage = dailyUsageMap.get(record.day) || 0;
    dailyUsageMap.set(record.day, currentUsage + record.usage);
  });

  // Convert to array sorted by day order
  const dailyUsage: DailyUsage[] = dayOrder.map((day) => ({
    day,
    usage: dailyUsageMap.get(day) || 0,
  }));

  const maxUsage = Math.max(...dailyUsage.map((d) => d.usage), 1); // Minimum 1 to avoid division by zero

  return (
    <View className="px-5 mb-6">
      <Text className="text-xl font-urban-bold text-black mb-3">
        Weekly Usage
      </Text>
      <View className="bg-white rounded-2xl p-5">
        <View className="flex-row items-end justify-between h-40 mb-3">
          {dailyUsage.map((item) => (
            <View key={item.day} className="items-center flex-1">
              <View className="w-full items-center justify-end flex-1 px-1">
                {item.usage > 0 && (
                  <Text className="text-xs font-urban-semibold text-black mb-1">
                    {item.usage}L
                  </Text>
                )}
                <View
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${(item.usage / maxUsage) * 100}%`,
                    minHeight: item.usage > 0 ? 4 : 0,
                    backgroundColor: item.usage > 0 ? "#212121" : "#e0e0e0",
                  }}
                />
              </View>
              <Text className="text-xs font-urban text-gray-500 mt-2">
                {item.day.substring(0, 3)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
