import { Tabs } from "expo-router";
import { ClockArrowUp, Droplet, Home, Settings } from "lucide-react-native";
import { StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const TabBarButton = ({ route, focused, label, icon }: any) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 8,
        }}
      >
        <View
          style={{
            backgroundColor: focused ? "#cfdeca" : "transparent",
            paddingHorizontal: 10,
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontFamily: "Urban-SemiBold",
            color: focused ? "#212121" : "#9ca3af",
            marginTop: 4,
            width: "100%",
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#efefef" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#212121",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarStyle: {
            backgroundColor: "#f6f5fa",
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom,
            paddingTop: 10,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color, size, focused }) => (
              <TabBarButton
                focused={focused}
                label="History"
                icon={
                  <ClockArrowUp
                    color={focused ? "#212121" : "#9ca3af"}
                    size={20}
                  />
                }
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <TabBarButton
                focused={focused}
                label="Home"
                icon={
                  <Home color={focused ? "#212121" : "#9ca3af"} size={20} />
                }
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size, focused }) => (
              <TabBarButton
                focused={focused}
                label="Setting"
                icon={
                  <Settings color={focused ? "#212121" : "#9ca3af"} size={20} />
                }
              />
            ),
            tabBarLabel: () => null,
          }}
        />
      </Tabs>
    </>
  );
}
