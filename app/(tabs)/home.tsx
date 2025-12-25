import { ComingSoon } from "@/components/section/coming-soon";
import { GalonData } from "@/components/section/dispenser-card";
import { DispenserDescriptionCard } from "@/components/section/dispenser-description-card";
import { DispenserGrid } from "@/components/section/dispenser-grid";
import Header from "@/components/section/header";
import { MenuItem, MenuPills } from "@/components/section/menu-pill";
import { Car, DoorOpen, Droplet } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<string>("galon");

  const menuItems: MenuItem[] = [
    { id: "galon", label: "Smart Dispenser", icon: Droplet, available: true },
    { id: "parking", label: "Smart Parking", icon: Car, available: false },
    { id: "door", label: "Smart Door", icon: DoorOpen, available: false },
  ];

  const galonData: GalonData[] = [
    { id: 1, location: "A102", waterLevel: 85, status: "good" },
    { id: 2, location: "A405", waterLevel: 45, status: "medium" },
    { id: 3, location: "B201", waterLevel: 15, status: "low" },
    { id: 4, location: "C103", waterLevel: 92, status: "good" },
    { id: 5, location: "D304", waterLevel: 68, status: "good" },
    { id: 6, location: "E502", waterLevel: 28, status: "medium" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ gap: 16, padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header title="Home" />

        {/* Pill Menu */}
        <MenuPills
          items={menuItems}
          selectedMenu={selectedMenu}
          onSelectMenu={setSelectedMenu}
        />

        {/* Smart Galon Content */}
        {selectedMenu === "galon" && (
          <View className="gap-4">
            <DispenserDescriptionCard />
            <DispenserGrid data={galonData} />
          </View>
        )}

        {/* Coming Soon */}
        {selectedMenu !== "galon" && <ComingSoon />}
      </ScrollView>
    </SafeAreaView>
  );
}
