import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-urban-bold text-black">History</Text>
        <Text className="text-sm text-gray-500 mt-2">Coming soon</Text>
      </View>
    </SafeAreaView>
  );
}
