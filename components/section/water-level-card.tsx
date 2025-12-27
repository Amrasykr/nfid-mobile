import { Calendar, TrendingDown, WifiOff } from "lucide-react-native";
import { Text, View } from "react-native";
import { WaveEffectFull } from "./wave-effect-full";

interface WaterLevelCardProps {
  waterLevel: number;
  status: "good" | "medium" | "low" | "offline";
  remaining: number;
  capacity: number;
  dailyUsage: number;
  estimatedEmpty: string;
}

const getStatusColor = (status: "good" | "medium" | "low" | "offline"): string => {
  switch (status) {
    case "good":
      return "#cfdeca";
    case "medium":
      return "#eff0a3";
    case "low":
      return "#f5c6c6";
    case "offline":
      return "#e0e0e0"; // Gray color for offline
  }
};

export const WaterLevelCard = ({
  waterLevel,
  status,
  remaining,
  capacity,
  dailyUsage,
  estimatedEmpty,
}: WaterLevelCardProps) => {
  const isOffline = status === "offline";

  return (
    <View className="px-5 mb-6">
      <View className="bg-white rounded-3xl p-6 shadow-sm">
        <View className="relative h-64 overflow-hidden mb-6">
          {isOffline ? (
            // Offline Status
            <View className="absolute inset-0 items-center justify-center rounded-2xl">
              <WifiOff size={64} color="#9e9e9e" />
              <Text className="text-2xl font-urban-bold text-gray-500 mt-4">
                Offline
              </Text>
              <Text className="text-sm font-urban text-gray-400 mt-2">
                Dispenser is currently disconnected
              </Text>
            </View>
          ) : (
            // Water Level Display
            <>
              <View
                className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
                style={{
                  height: `${waterLevel}%`,
                  backgroundColor: getStatusColor(status),
                }}
              >
                <WaveEffectFull color={getStatusColor(status)} />
              </View>
              <View className="absolute inset-0 items-center justify-center">
                <Text className="text-6xl font-urban-bold text-black">
                  {waterLevel}%
                </Text>
                <Text className="text-sm font-urban text-black/80 mt-2">
                  Current Water Level
                </Text>
                <View className="mt-4 bg-white px-4 py-2 rounded-full">
                  <Text className="text-lg font-urban-bold text-black">
                    {remaining}L / {capacity}L
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>

        {/* Quick Stats */}
        <View className="flex-row gap-3">
          <View className="flex-1 bg-primary rounded-xl p-3">
            <View className="flex-row items-center mb-1 gap-1">
              <TrendingDown size={16} />
              <Text className="text-xs font-urban text-black/80 ml-1">
                Daily Usage
              </Text>
            </View>
            <Text className="text-xl font-urban-bold text-black">
              {dailyUsage}L
            </Text>
          </View>

          <View className="flex-1 bg-primary rounded-xl p-3">
            <View className="flex-row items-center mb-1 gap-1">
              <Calendar size={16} />
              <Text className="text-xs font-urban text-black/80 ml-1">
                Est. Empty
              </Text>
            </View>
            <Text className="text-lg font-urban-bold text-black">
              {estimatedEmpty}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
