import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const SplashScreen = () => {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const text = 'Hellobooks.Ai';
  const letterAnims = text.split('').map(() => useRef(new Animated.Value(0)).current); 


  useEffect(() => {
   
    const letterAnimations = letterAnims.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 100, 
        delay: index * 100,
        useNativeDriver: true,
      })
    );

    const fadeAndScaleAnimations = Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4, 
        tension: 40, 
        useNativeDriver: true,
      }),
    ]);

    Animated.sequence([
      Animated.parallel(letterAnimations), 
      fadeAndScaleAnimations,
    ]).start();


    const timer = setTimeout(() => {
      navigation.replace('Dashboard');
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <LinearGradient colors={['#307BF6', '#225CBD', '#225CBD']} style={{ flex: 1 }}>
      <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />

      
      <View
        style={{
          backgroundColor: '#fff',
          opacity: 0.075,
          width: widthPercentageToDP(60),
          height: heightPercentageToDP(30),
          borderRadius: heightPercentageToDP(1000),
          position: "absolute",
          left: widthPercentageToDP(-15),
          top: heightPercentageToDP(-5),
          zIndex: 0,
        }}
      />
      <View
        style={{
          backgroundColor: '#fff',
          opacity: 0.075,
          width: widthPercentageToDP(90),
          height: heightPercentageToDP(45),
          borderRadius: heightPercentageToDP(1000),
          position: "absolute",
          alignSelf: 'center',
          top: heightPercentageToDP(-38),
          zIndex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: '#fff',
          opacity: 0.075,
          width: widthPercentageToDP(60),
          height: heightPercentageToDP(30),
          borderRadius: heightPercentageToDP(1000),
          position: "absolute",
          right: widthPercentageToDP(-35),
          top: heightPercentageToDP(10),
          zIndex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: '#fff',
          opacity: 0.05,
          width: widthPercentageToDP(60),
          height: heightPercentageToDP(30),
          borderRadius: heightPercentageToDP(1000),
          position: "absolute",
          right: widthPercentageToDP(-25),
          top: heightPercentageToDP(30),
          zIndex: 3,
        }}
      />

     
      <Animated.View
        style={{
          opacity: fadeAnim, 
          transform: [{ scale: scaleAnim }], 
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row', 
        }}
      >
        {text.split('').map((letter, index) => (
          <Animated.Text
            key={index}
            style={{
              opacity: letterAnims[index], 
              color: '#fff',
              fontSize: widthPercentageToDP(10),
              fontWeight: 'bold',
              fontFamily: 'RHDB', 
            }}
          >
            {letter}
          </Animated.Text>
        ))}
      </Animated.View>
    </LinearGradient>
  );
};

export default SplashScreen;