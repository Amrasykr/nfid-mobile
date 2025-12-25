import { Bell } from "lucide-react-native";
import { Text, View } from "react-native";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View className="flex-row justify-between items-center rounded-3xl ">
      <Text className="text-4xl font-urban-semibold text-black">{title}</Text>
      <View className="rounded-full p-2 bg-success items-center justify-center">
        <Bell size={24} />
      </View>
    </View>
  );
}
