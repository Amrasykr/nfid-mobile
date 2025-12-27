import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export const SkeletonDispenserCard = () => {
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
    <View className="bg-white rounded-2xl p-4 w-[48%] mb-6">
      {/* Location Badge Skeleton */}
      <View className="flex-row items-center justify-between mb-4">
        <Animated.View
          className="bg-gray-200 px-3 py-1.5 rounded-full w-20 h-6"
          style={{ opacity: pulseAnim }}
        />
        <Animated.View
          className="w-3 h-3 rounded-full bg-gray-200"
          style={{ opacity: pulseAnim }}
        />
      </View>

      {/* Water Level Skeleton */}
      <View className="relative h-28 overflow-hidden py-2">
        <Animated.View
          className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gray-200"
          style={{ height: "60%", opacity: pulseAnim }}
        />
        <View className="absolute inset-0 items-center justify-center">
          <Animated.View
            className="bg-gray-300 rounded w-16 h-10 mb-2"
            style={{ opacity: pulseAnim }}
          />
          <Animated.View
            className="bg-gray-200 rounded w-20 h-3"
            style={{ opacity: pulseAnim }}
          />
        </View>
      </View>
    </View>
  );
};
