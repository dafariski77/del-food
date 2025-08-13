import { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDotStyle } from '../hooks';

interface CarouselPaginationDotProps {
  currentIndex: number;
  index: number;
  customStyle?: ViewStyle | ViewStyle[];
}

export function CarouselPaginationDot({
  currentIndex,
  index,
  customStyle,
}: CarouselPaginationDotProps) {
  const dotStyle = useDotStyle({
    currentIndex,
    index,
  });

  return <Animated.View style={[customStyle, dotStyle]} />;
}
