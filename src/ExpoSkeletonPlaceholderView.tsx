import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { View, ColorSchemeName, useColorScheme } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { SkeletonPlaceholderProps } from "./ExpoSkeletonPlaceholder.types";

const defaultColors = {
  light: ["#E1E9EE", "#F2F8FC", "#E1E9EE"],
  dark: ["#2A2A2A", "#3B3B3B", "#2A2A2A"],
};

const SkeletonPlaceholder: React.FC<SkeletonPlaceholderProps> = ({
  width = "100%",
  height = 20,
  borderRadius = 8,
  style,
  colors,
  duration = 1500,
}) => {
  const scheme: ColorSchemeName = useColorScheme();
  const gradientColors =
    colors || (scheme === "dark" ? defaultColors.dark : defaultColors.light);

  const translateX = useSharedValue(-1);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(1, { duration, easing: Easing.linear }),
      -1,
      false
    );
  }, [duration]);

  const animatedStyle = useAnimatedStyle(() => {
    const translate = interpolate(translateX.value, [0, 1], [-100, 100]);
    return { transform: [{ translateX: translate }] };
  });

  return (
    <View
      style={[
        {
          width,
          height,
          borderRadius,
          overflow: "hidden",
          backgroundColor: gradientColors[1],
        },
        style,
      ]}
    >
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        <LinearGradient
          //@ts-expect-error - ok
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default SkeletonPlaceholder;
