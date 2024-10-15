// import React from 'react';
// import { Dimensions, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Carousel from 'react-native-reanimated-carousel';

// function carousal() {
//   const width = Dimensions.get('window').width;

//   return (
//     <SafeAreaView>
//       <Carousel
//         loop
//         width={width}
//         height={width / 2}
//         autoPlay={true}
//         data={[...new Array(6).keys()]}
//         scrollAnimationDuration={1000}
//         mode={'horizontal-stack'}
//         modeConfig={{
//           snapDirection: 'left',
//           stackInterval: 18,
//         }}
//         onSnapToItem={(index) => console.log('current index:', index)}
//         renderItem={({ index }) => (
//           <View
//             style={{
//               flex: 1,
//               borderWidth: 1,
//               justifyContent: 'center',
//             }}
//           >
//             <Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// export default carousal;
