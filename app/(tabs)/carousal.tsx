import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGvbMp7uc6_OSpwtI6L95nKh7r9tI_BaF7w&s',
    title: 'Summer Savings',
    description: 'Mid-week deals to elevate your everyday.',
    offer: '2 for $80.00',
    ctaText: 'Shop Now',
    color: '#B0604D',
  },
  {
    logo: 'https://mma.prnewswire.com/media/2458587/Bounteous_x_Accolite_Logo.jpg?p=twitter',
    title: 'Winter Savings',
    description: 'Mid-Day deals to elevate your everyday.',
    offer: '2 for $80.00',
    ctaText: 'Gett Now',
    color: '#899F9C',
  },
  {
    logo: 'https://mma.prnewswire.com/media/2458587/Bounteous_x_Accolite_Logo.jpg?p=twitter',
    title: 'Spring Savings',
    description: 'Mid-month deals to elevate your everyday.',
    offer: '2 for $10.00',
    ctaText: 'Gett Now',
    color: '#B3C680',
  },
];

const defaultDataWith6Colors = ['#B0604D', '#899F9C', '#B3C680'];
const PAGE_WIDTH = 430;

function Index() {
  const progress = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: 412,
  } as const;

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <SafeAreaView
      id='carousel-component'
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      <View style={{ height: 450, width: '100%' }}>
        <Carousel
          ref={ref}
          {...baseOptions}
          autoPlayInterval={2000}
          data={data}
          height={412}
          loop={true}
          pagingEnabled={true}
          snapEnabled={true}
          width={430 * 0.75}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 412,
          }}
          onProgressChange={progress}
          mode={'horizontal-stack'}
          modeConfig={{
            snapDirection: 'left',
            stackInterval: 18,
          }}
          customConfig={() => ({ type: 'positive', viewCount: 5 })}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderWidth: 1,
                // justifyContent: 'center',
                backgroundColor: item.color,
                borderRadius: 8,
                paddingLeft: 16,
                paddingTop: 16,
              }}
            >
              <View style={{ width: '60%', gap: 20 }}>
                <Image
                  source={{
                    uri: item.logo,
                  }}
                  style={{
                    height: 24,
                    width: 63,
                    resizeMode: 'contain',
                  }}
                  alt='sample'
                ></Image>
                <Text
                  style={{
                    fontSize: 30,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {item.description}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {item.offer}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    // alignContent: 'center',
                    borderRadius: 100,
                    backgroundColor: '#EDE2D0',
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      alignContent: 'center',
                      verticalAlign: 'middle',
                      borderRadius: 100,
                      paddingHorizontal: 16,
                      paddingVertical: 14,
                      height: 40,
                      //   width: 'auto',
                    }}
                    role='button'
                  >
                    {item.ctaText}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                  }}
                >
                  Terms and Conditions
                </Text>
              </View>
              <Image
                style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                source={require('@/assets/images/background.png')}
              ></Image>
            </View>
          )}
        />

        <View style={{ display: 'flex' }}>
          <Pagination.Basic<{ title: string }>
            progress={progress}
            data={data.map(({ title }) => ({ title }))}
            dotStyle={{
              width: 25,
              height: 4,
              backgroundColor: '#232F234D',
            }}
            activeDotStyle={{
              overflow: 'hidden',
              backgroundColor: '#262626',
            }}
            containerStyle={{
              gap: 10,
              marginBottom: 10,
            }}
            horizontal
            onPress={onPressPagination}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Index;
