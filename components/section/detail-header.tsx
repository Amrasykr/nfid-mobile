import { ArrowLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface DetailHeaderProps {
  location: string;
  building?: string;
  onBack?: () => void;
}

export const DetailHeader = ({ location, building, onBack }: DetailHeaderProps) => {
  return (
    <View className="px-5 pt-4 pb-6">
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center gap-6">
          <TouchableOpacity
            className="rounded-full p-2 bg-success items-center justify-center"
            onPress={onBack}
            activeOpacity={0.7}
          >
            <ArrowLeft size={24} />
          </TouchableOpacity>
          <View>
            <Text className="text-4xl font-urban-semibold text-black">
              Dispenser {location}
            </Text>
            {building && (
              <Text className="text-sm font-urban text-black/60 mt-1">
                {building}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
