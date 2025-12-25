import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Svg, { Path } from "react-native-svg";

interface WaveEffectFullProps {
  color: string;
}

export const WaveEffectFull = ({ color }: WaveEffectFullProps) => {
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
        left: -100,
        right: -100,
        height: 20,
        transform: [{ translateX }],
        overflow: "hidden",
      }}
    >
      <Svg
        height="20"
        width="200%"
        viewBox="0 0 1200 20"
        preserveAspectRatio="xMidYMid slice"
      >
        <Path
          d="M-100,10 Q-87.5,0 -75,10 T-50,10 T-25,10 T0,10 T25,10 T50,10 T75,10 T100,10 T125,10 T150,10 T175,10 T200,10 T225,10 T250,10 T275,10 T300,10 T325,10 T350,10 T375,10 T400,10 T425,10 T450,10 T475,10 T500,10 T525,10 T550,10 T575,10 T600,10 T625,10 T650,10 T675,10 T700,10 T725,10 T750,10 T775,10 T800,10 T825,10 T850,10 T875,10 T900,10 T925,10 T950,10 T975,10 T1000,10 T1025,10 T1050,10 T1075,10 T1100,10 T1125,10 T1150,10 T1175,10 T1200,10 L1200,20 L-100,20 Z"
          fill={color}
        />
      </Svg>
    </Animated.View>
  );
};
