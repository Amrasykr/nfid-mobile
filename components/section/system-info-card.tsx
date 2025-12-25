import { Users, Wifi } from "lucide-react-native";
import { Text, View } from "react-native";

interface SystemInfoCardProps {
  connectivity: string;
  lastSync: string;
  totalUsers: number;
}

export const SystemInfoCard = ({
  connectivity,
  lastSync,
  totalUsers,
}: SystemInfoCardProps) => {
  return (
    <View className="px-5 mb-6">
      <Text className="text-xl font-urban-bold text-black mb-3">
        System Information
      </Text>
      <View className="bg-white rounded-2xl p-4 gap-3">
        <View className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center flex-1">
            <View className="w-10 h-10 bg-success rounded-full items-center justify-center">
              <Wifi color="#2e7d32" size={20} />
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-sm font-urban-semibold text-black">
                Connectivity
              </Text>
              <Text className="text-sm font-urban text-black/80">
                Last sync: {lastSync}
              </Text>
            </View>
          </View>
          <View className="bg-success px-3 py-1 rounded-full">
            <Text className="text-xs font-urban-bold text-green-700">
              {connectivity}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center flex-1">
            <View className="w-10 h-10 bg-purple rounded-full items-center justify-center">
              <Users color="#6a1b9a" size={20} />
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-sm font-urban-semibold text-black">
                Active Users
              </Text>
              <Text className="text-sm font-urban text-black/80">
                registered users
              </Text>
            </View>
          </View>
          <Text className="text-lg font-urban-bold text-black">
            {totalUsers}
          </Text>
        </View>
      </View>
    </View>
  );
};
