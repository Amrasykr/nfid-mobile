import { fetchDispensers } from "@/api/dispensers";
import { ComingSoon } from "@/components/section/coming-soon";
import { DispenserDescriptionCard } from "@/components/section/dispenser-description-card";
import { DispenserGrid } from "@/components/section/dispenser-grid";
import Header from "@/components/section/header";
import { MenuItem, MenuPills } from "@/components/section/menu-pill";
import { DispenserData } from "@/interfaces/dispenser";
import { Car, DoorOpen, Droplet } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<string>("galon");
  const [dispenserData, setDispenserData] = useState<DispenserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { id: "galon", label: "Smart Dispenser", icon: Droplet, available: true },
    { id: "parking", label: "Smart Parking", icon: Car, available: false },
    { id: "door", label: "Smart Door", icon: DoorOpen, available: false },
  ];

  // Fetch dispenser data from API
  useEffect(() => {
    const loadDispensers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDispensers();
        setDispenserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch dispensers");
        console.error("Error loading dispensers:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDispensers();
  }, []);

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
            
            {/* Loading State */}
            {loading && (
              <View className="items-center justify-center py-8">
                <ActivityIndicator size="large" color="#eff0a3" />
                <Text className="text-sm text-gray-500 mt-2">Loading dispensers...</Text>
              </View>
            )}
            
            {/* Error State */}
            {error && (
              <View className="bg-red-50 p-4 rounded-lg">
                <Text className="text-red-600 font-urban-semibold">Error: {error}</Text>
              </View>
            )}
            
            {/* Dispenser Grid */}
            {!loading && !error && <DispenserGrid data={dispenserData} />}
          </View>
        )}

        {/* Coming Soon */}
        {selectedMenu !== "galon" && <ComingSoon />}
      </ScrollView>
    </SafeAreaView>
  );
}
