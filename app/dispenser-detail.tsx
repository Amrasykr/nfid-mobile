import { fetchDispenserById } from "@/api/dispensers";
import { fetchRecentUsageHistory, fetchWeeklyUsageHistory } from "@/api/usage";
import { DetailHeader } from "@/components/section/detail-header";
import { LastUsers } from "@/components/section/last-users";
import { SystemInfoCard } from "@/components/section/system-info-card";
import { UsageChart } from "@/components/section/usage-chart";
import { WaterLevelCard } from "@/components/section/water-level-card";
import { DispenserData } from "@/interfaces/dispenser";
import { UsageHistoryData } from "@/interfaces/usage";
import { formatRelativeTime, formatShortDate } from "@/utils/formatters";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DispenserDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [dispenser, setDispenser] = useState<DispenserData | null>(null);
  const [usageHistory, setUsageHistory] = useState<UsageHistoryData[]>([]);
  const [recentUsage, setRecentUsage] = useState<UsageHistoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDispenser = async () => {
      if (!id) {
        setError("No dispenser ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Fetch dispenser data and usage history in parallel
        const [dispenserData, usageData, recentData] = await Promise.all([
          fetchDispenserById(id),
          fetchWeeklyUsageHistory(id),
          fetchRecentUsageHistory(id, 10)
        ]);
        
        setDispenser(dispenserData);
        setUsageHistory(usageData);
        setRecentUsage(recentData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Dispenser not found";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadDispenser();
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#eff0a3" />
          <Text className="text-sm text-gray-500 mt-2">Loading dispenser details...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !dispenser) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <DetailHeader location="Error" onBack={handleBack} />
        <View className="flex-1 items-center justify-center px-5">
          <Text className="text-red-600 font-urban-semibold text-center">
            {error || "Dispenser not found"}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <DetailHeader 
          location={dispenser.location}
          building={dispenser.building}
          onBack={handleBack}
        />

        <WaterLevelCard
          waterLevel={dispenser.waterLevel}
          status={dispenser.status}
          remaining={dispenser.remaining}
          capacity={dispenser.capacity}
          dailyUsage={dispenser.dailyUsage}
          estimatedEmpty={formatShortDate(dispenser.estimatedEmpty)}
        />

        <SystemInfoCard
          connectivity={dispenser.connectivity}
          lastSync={formatRelativeTime(dispenser.lastSync)}
          totalUsers={dispenser.totalUsers}
        />

        <UsageChart data={usageHistory} />

        <LastUsers data={recentUsage} />
      </ScrollView>
    </SafeAreaView>
  );
}
