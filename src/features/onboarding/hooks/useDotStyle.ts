import { colors } from "@/theme";
import { ViewStyle } from "react-native";
import { interpolateColor, useAnimatedStyle, useDerivedValue } from "react-native-reanimated";

interface UseDotStyleProps {
  currentIndex: number;
  index: number;
}

export const useDotStyle = ({
  currentIndex, index
}: UseDotStyleProps) => {
  const isActive = useDerivedValue(() => {
    return index === currentIndex ? 1 : 0
  }, [currentIndex])

  const animatedStyle = useAnimatedStyle(() => {
    const baseStyle: ViewStyle = {};

    baseStyle.backgroundColor = interpolateColor(
      isActive.get(),
      [0, 1],
      [colors.lightPrimary, colors.primary],
    );


    return baseStyle;
  }, [isActive]);

  return animatedStyle
}
