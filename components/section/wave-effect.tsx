import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Svg, { Path } from "react-native-svg";

interface WaveEffectProps {
  color: string;
}

export const WaveEffect = ({ color }: WaveEffectProps) => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const translateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: -15,
        left: 0,
        right: 0,
        height: 20,
        transform: [{ translateX }],
      }}
    >
      <Svg height="20" width="300" viewBox="0 0 300 20">
        <Path
          d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10 T125,10 T150,10 T175,10 T200,10 T225,10 T250,10 T275,10 T300,10 L300,20 L0,20 Z"
          fill={color}
        />
      </Svg>
      <Svg
        height="20"
        width="300"
        viewBox="0 0 300 20"
        style={{ position: "absolute", left: 0 }}
      >
        <Path
          d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10 T125,10 T150,10 T175,10 T200,10 T225,10 T250,10 T275,10 T300,10 L300,20 L0,20 Z"
          fill={color}
        />
      </Svg>
    </Animated.View>
  );
};
