import * as Font from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function setup() {
      await Font.loadAsync({
        "Urban-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
        "Urban-Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
        "Urban-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
        "Urban-Light": require("../assets/fonts/Urbanist-Light.ttf"),
      });

      setFontsLoaded(true);
    }

    setup();
  }, []);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
