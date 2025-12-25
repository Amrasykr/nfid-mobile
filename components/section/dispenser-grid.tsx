import { DispenserData } from "@/interfaces/dispenser";
import { Text, View } from "react-native";
import { DispenserCard } from "./dispenser-card";

interface DispenserGridProps {
  data: DispenserData[];
}

export const DispenserGrid = ({ data }: DispenserGridProps) => {
  return (
    <View>
      <Text className="text-xl font-urban-bold text-black mb-4">
        Active Dispensers
      </Text>
      <View className="flex-row flex-wrap gap-3">
        {data.map((galon) => (
          <DispenserCard key={galon.id} galon={galon} />
        ))}
      </View>
    </View>
  );
};
