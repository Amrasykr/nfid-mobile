import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export const SkeletonWaterLevel = () => {
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
      {/* Water percentage skeleton */}
      <View className="items-center mb-6">
        <Animated.View
          className="w-32 h-32 rounded-full bg-gray-200 mb-4"
          style={{ opacity: pulseAnim }}
        />
        <Animated.View
          className="h-6 bg-gray-300 rounded w-24"
          style={{ opacity: pulseAnim }}
        />
      </View>

      {/* Stats skeleton */}
      <View className="flex-row justify-between pt-4 border-t border-gray-100">
        {[1, 2, 3].map((item) => (
          <View key={item} className="items-center">
            <Animated.View
              className="h-8 bg-gray-300 rounded w-16 mb-2"
              style={{ opacity: pulseAnim }}
            />
            <Animated.View
              className="h-4 bg-gray-200 rounded w-20"
              style={{ opacity: pulseAnim }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
