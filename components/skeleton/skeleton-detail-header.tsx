import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export const SkeletonDetailHeader = () => {
  const pulseAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <View className="bg-white px-5 py-6 mb-6">
      <View className="flex-row items-center justify-between mb-4">
        {/* Back button skeleton */}
        <Animated.View
          className="w-10 h-10 rounded-full bg-gray-200"
          style={{ opacity: pulseAnim }}
        />
        {/* Empty space for balance */}
        <View className="w-10" />
      </View>

      {/* Location text skeleton */}
      <View className="gap-2">
        <Animated.View
          className="h-8 bg-gray-300 rounded w-48"
          style={{ opacity: pulseAnim }}
        />
        <Animated.View
          className="h-5 bg-gray-200 rounded w-32"
          style={{ opacity: pulseAnim }}
        />
      </View>
    </View>
  );
};
