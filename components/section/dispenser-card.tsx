import { DispenserData } from "@/interfaces/dispenser";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { WaveEffect } from "./wave-effect";

interface DispenserCardProps {
  galon: DispenserData;
  onPress?: () => void;
}

const getStatusColor = (status: "good" | "medium" | "low"): string => {
  switch (status) {
    case "good":
      return "#cfdeca";
    case "medium":
      return "#eff0a3";
    case "low":
      return "#f5c6c6";
  }
};

export const DispenserCard = ({ galon, onPress }: DispenserCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/dispenser-detail?id=${galon.id}`);
    }
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 w-[48%]"
      activeOpacity={0.7}
      onPress={handlePress}
    >
      {/* Location Badge */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="bg-gray-100 px-3 py-1.5 rounded-full">
          <Text className="text-sm font-urban-bold text-black">
            {galon.location}
          </Text>
        </View>
        <View
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: getStatusColor(galon.status),
          }}
        />
      </View>

      {/* Water Level */}
      <View className="relative h-28 overflow-hidden py-2">
        <View
          className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
          style={{
            height: `${galon.waterLevel}%`,
            backgroundColor: getStatusColor(galon.status),
          }}
        >
          {/* Wave Animation */}
          <WaveEffect color={getStatusColor(galon.status)} />
        </View>
        <View className="absolute inset-0 items-center justify-center">
          <Text className="text-3xl font-urban-bold text-black">
            {galon.waterLevel}%
          </Text>
          <Text className="text-xs font-urban-semibold text-black/60 mt-1">
            Water Level
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
