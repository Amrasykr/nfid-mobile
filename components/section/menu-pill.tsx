import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export interface MenuItem {
  id: string;
  label: string;
  icon: any;
  available: boolean;
}

interface MenuPillsProps {
  items: MenuItem[];
  selectedMenu: string;
  onSelectMenu: (id: string) => void;
}

export const MenuPills = ({
  items,
  selectedMenu,
  onSelectMenu,
}: MenuPillsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8 }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = selectedMenu === item.id;

        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onSelectMenu(item.id)}
            className={`flex-row items-center px-4 py-3 rounded-full ${
              isActive ? "bg-accent" : "bg-white"
            }`}
          >
            <Icon color="#212121" size={18} />
            <Text className="ml-2 font-urban-semibold text-black">
              {item.label}
            </Text>
            {!item.available && (
              <View className="ml-2 bg-gray-400 px-2 py-0.5 rounded-full">
                <Text className="text-xs font-urban-bold text-white">SOON</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
