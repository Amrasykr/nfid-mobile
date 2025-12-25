import { ArrowLeft } from "lucide-react-native";
import { Text, View } from "react-native";

interface DetailHeaderProps {
  location: string;
}

export const DetailHeader = ({ location }: DetailHeaderProps) => {
  return (
    <View className="px-5 pt-4 pb-6">
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center gap-6">
          <View className="rounded-full p-2 bg-success items-center justify-center">
            <ArrowLeft size={24} />
          </View>
          <Text className="text-4xl font-urban-semibold text-black">
            Dispenser {location}
          </Text>
        </View>
      </View>
    </View>
  );
};
