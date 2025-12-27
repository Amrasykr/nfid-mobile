import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export const SkeletonSystemInfo = () => {
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

      {/* Info items skeleton */}
      <View className="gap-4">
        {[1, 2, 3].map((item) => (
          <View key={item} className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3 flex-1">
              <Animated.View
                className="w-10 h-10 rounded-full bg-gray-200"
                style={{ opacity: pulseAnim }}
              />
              <View className="gap-2 flex-1">
                <Animated.View
                  className="h-4 bg-gray-300 rounded w-24"
                  style={{ opacity: pulseAnim }}
                />
                <Animated.View
                  className="h-3 bg-gray-200 rounded w-32"
                  style={{ opacity: pulseAnim }}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
