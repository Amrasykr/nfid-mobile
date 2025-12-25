// app/(tabs)/settings.tsx
import Header from "@/components/section/header";
import { Bell, ChevronRight, Info } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6 gap-6">
          <Header title="Setting" />

          {/* Notifications */}
          <View className="bg-white rounded-3xl p-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-10 h-10 bg-accent rounded-full items-center justify-center">
                  <Bell color="#212121" size={20} />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-base font-urban-semibold text-black">
                    Notifikasi
                  </Text>
                  <Text className="text-sm font-urban text-gray-500">
                    Alert saat air hampir habis
                  </Text>
                </View>
              </View>
              <Switch
                value={notificationEnabled}
                onValueChange={setNotificationEnabled}
                trackColor={{ false: "#d1d5db", true: "#cfdeca" }}
                thumbColor={notificationEnabled ? "#212121" : "#9ca3af"}
              />
            </View>
          </View>

          {/* About */}
          <TouchableOpacity className="bg-white rounded-3xl p-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-10 h-10 bg-accent rounded-full items-center justify-center">
                  <Info color="#212121" size={20} />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-base font-urban-semibold text-black">
                    Tentang Aplikasi
                  </Text>
                  <Text className="text-sm font-urban text-gray-500">
                    Versi 1.0.0
                  </Text>
                </View>
              </View>
              <ChevronRight color="#9ca3af" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
