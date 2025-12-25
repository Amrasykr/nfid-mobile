import { DetailHeader } from "@/components/section/detail-header";
import { SystemInfoCard } from "@/components/section/system-info-card";
import { UsageChart } from "@/components/section/usage-chart";
import { WaterLevelCard } from "@/components/section/water-level-card";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DispenserDetail() {
  // Mock data - replace with route params or API call
  const dispenserData = {
    id: 1,
    location: "A102",
    waterLevel: 85,
    status: "good" as "good" | "medium" | "low",
    building: "Campus A - Floor 1",
    capacity: 19,
    remaining: 16.15,
    lastRefill: "2024-12-18T10:30:00",
    dailyUsage: 2.5,
    estimatedEmpty: "Dec 25",
    totalUsers: 24,
    activeToday: 18,
    temperature: 8,
    connectivity: "Online",
    lastSync: "2 min ago",
  };

  const usageData = [
    { day: "Mon", usage: 2.8 },
    { day: "Tue", usage: 2.5 },
    { day: "Wed", usage: 3.2 },
    { day: "Thu", usage: 2.1 },
    { day: "Fri", usage: 2.9 },
    { day: "Sat", usage: 1.5 },
    { day: "Sun", usage: 1.3 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <DetailHeader location={dispenserData.location} />

        <WaterLevelCard
          waterLevel={dispenserData.waterLevel}
          status={dispenserData.status}
          remaining={dispenserData.remaining}
          capacity={dispenserData.capacity}
          dailyUsage={dispenserData.dailyUsage}
          estimatedEmpty={dispenserData.estimatedEmpty}
        />

        <SystemInfoCard
          connectivity={dispenserData.connectivity}
          lastSync={dispenserData.lastSync}
          totalUsers={dispenserData.totalUsers}
        />

        <UsageChart data={usageData} />
      </ScrollView>
    </SafeAreaView>
  );
}
