import { colors } from '@/theme';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { CarouselPaginationDot } from './CarouselPaginationDot';

type CarouselPaginationTypes = {
  totalItem: number;
  currentIndex: number;
  containerStyle?: ViewStyle | ViewStyle[];
};

export function CarouselPagination({
  currentIndex,
  totalItem,
  containerStyle,
}: CarouselPaginationTypes) {
  const getStaticStyle = () => {
    const staticStyle: ViewStyle[] = [styles.defaultStyle];

    return staticStyle;
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {Array.from({ length: totalItem }).map((_, index) => (
        <CarouselPaginationDot
          currentIndex={currentIndex}
          index={index}
          customStyle={getStaticStyle()}
          key={index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  defaultStyle: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: colors.lightPrimary,
  },
});
