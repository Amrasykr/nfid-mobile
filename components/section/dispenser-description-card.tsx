import { CheckCircle, Droplet, Wifi, Zap } from "lucide-react-native";
import { Text, View } from "react-native";

export const DispenserDescriptionCard = () => {
  return (
    <View className="bg-black rounded-3xl p-6">
      <View className="flex-row items-start mb-4">
        <View className="w-14 h-14 bg-white/20 rounded-2xl items-center justify-center mr-4">
          <Zap color="#fff" size={28} />
        </View>
        <View className="flex-1">
          <Text className="text-2xl font-urban-bold text-white mb-2">
            Smart Dispenser IoT System
          </Text>
          <Text className="text-sm font-urban text-white/80">
            Real-time water level monitoring powered by IoT sensors and RFID
            technology
          </Text>
        </View>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 bg-white/10 rounded-xl p-3">
          <View className="flex-row items-center mb-2">
            <Wifi color="#fff" size={16} />
            <Text className="text-xs font-urban-semibold text-white/80 ml-2">
              Connectivity
            </Text>
          </View>
          <Text className="text-xl font-urban-bold text-white">24/7</Text>
          <Text className="text-xs font-urban text-white/70 mt-1">
            Live Monitoring
          </Text>
        </View>

        <View className="flex-1 bg-white/10 rounded-xl p-3">
          <View className="flex-row items-center mb-2">
            <Droplet color="#fff" size={16} />
            <Text className="text-xs font-urban-semibold text-white/80 ml-2">
              Accuracy
            </Text>
          </View>
          <Text className="text-xl font-urban-bold text-white">±2%</Text>
          <Text className="text-xs font-urban text-white/70 mt-1">
            Precision Level
          </Text>
        </View>

        <View className="flex-1 bg-white/10 rounded-xl p-3">
          <View className="flex-row items-center mb-2">
            <CheckCircle color="#fff" size={16} />
            <Text className="text-xs font-urban-semibold text-white/80 ml-2">
              Security
            </Text>
          </View>
          <Text className="text-xl font-urban-bold text-white">RFID</Text>
          <Text className="text-xs font-urban text-white/70 mt-1">
            Access Control
          </Text>
        </View>
      </View>
    </View>
  );
};
