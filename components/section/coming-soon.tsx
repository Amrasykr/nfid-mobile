import { Text, View } from "react-native";

export const ComingSoon = () => {
  return (
    <View className=" p-12 items-center">
      <Text className="text-2xl font-urban-bold text-black mb-2">
        Coming Soon
      </Text>
      <Text className="text-sm font-urban text-gray-500 text-center">
        This feature is currently under development
      </Text>
    </View>
  );
};
