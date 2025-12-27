import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export const SkeletonUsageChart = () => {
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
    <View className="bg-white mx-5 p-6 rounded-2xl mb-6">
      {/* Title skeleton */}
      <Animated.View
        className="h-6 bg-gray-300 rounded w-32 mb-6"
        style={{ opacity: pulseAnim }}
      />

      {/* Chart bars skeleton */}
      <View className="flex-row items-end justify-between h-40 gap-2">
        {[60, 80, 45, 90, 70, 55, 85].map((height, index) => (
          <Animated.View
            key={index}
            className="flex-1 bg-gray-200 rounded-t"
            style={{ height: `${height}%`, opacity: pulseAnim }}
          />
        ))}
      </View>

      {/* Day labels skeleton */}
      <View className="flex-row justify-between mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Animated.View
            key={item}
            className="h-4 bg-gray-200 rounded w-8"
            style={{ opacity: pulseAnim }}
          />
        ))}
      </View>
    </View>
  );
};
