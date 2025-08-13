import { AppButton, AppText, ScreenWrapper } from '@/features/core/components';
import {
  CarouselPagination,
  OnboardingItem,
} from '@/features/onboarding/components';
import { FlashList, ViewToken } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const { width: screenWidth } = Dimensions.get('screen');

  const onCarouselChange = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
    [],
  );

  const isLastSlide = useMemo(() => {
    return currentIndex === 4 - 1;
  }, [currentIndex]);

  const flashListRef = useRef<FlashList<number>>(null);

  const handleNext = useCallback(() => {
    if (isLastSlide) {
      router.push('/');
    }

    flashListRef.current?.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  }, [isLastSlide, currentIndex]);

  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View
          style={{
            paddingTop: 90,
          }}
        >
          <View style={styles.carouselContainer}>
            <FlashList
              ref={flashListRef}
              data={[1, 2, 3, 4]}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              estimatedItemSize={screenWidth}
              renderItem={() => (
                <View
                  style={[
                    styles.itemContainer,
                    {
                      width: screenWidth,
                    },
                  ]}
                >
                  <OnboardingItem />
                </View>
              )}
              onViewableItemsChanged={onCarouselChange}
            />
          </View>
          <View
            style={{
              marginTop: 40,
            }}
          >
            <CarouselPagination currentIndex={currentIndex} totalItem={4} />
          </View>
        </View>
        <View>
          {isLastSlide ? (
            <View>
              <AppButton
                onPress={() => console.log('Last slide')}
                text="GET STARTED"
              />
              <AppText
                style={{
                  paddingVertical: 22,
                  borderRadius: 12,
                }}
                align="center"
              ></AppText>
            </View>
          ) : (
            <View>
              <AppButton onPress={handleNext} text="NEXT" />
              <AppText
                style={{
                  paddingVertical: 22,
                  borderRadius: 12,
                }}
                align="center"
              >
                Skip
              </AppText>
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginHorizontal: -20,
  },
  itemContainer: {
    paddingHorizontal: 20,
  },
});
