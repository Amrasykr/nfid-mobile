import { Text, View } from "react-native";

interface UsageData {
  day: string;
  usage: number;
}

interface UsageChartProps {
  data: UsageData[];
}

export const UsageChart = ({ data }: UsageChartProps) => {
  const maxUsage = Math.max(...data.map((d) => d.usage));

  return (
    <View className="px-5 mb-6">
      <Text className="text-xl font-urban-bold text-black mb-3">
        Weekly Usage
      </Text>
      <View className="bg-white rounded-2xl p-5">
        <View className="flex-row items-end justify-between h-40 mb-3">
          {data.map((item, index) => (
            <View key={index} className="items-center flex-1">
              <View className="w-full items-center justify-end flex-1 px-1">
                <View
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${(item.usage / maxUsage) * 100}%`,
                    backgroundColor:
                      index === data.length - 1 ? "#212121" : "#e0e0e0",
                  }}
                />
              </View>
              <Text className="text-xs font-urban text-gray-500 mt-2">
                {item.day}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
