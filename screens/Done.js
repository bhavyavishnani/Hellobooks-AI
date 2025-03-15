import LottieView from "lottie-react-native";
import { StatusBar, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const Done = () => {


  return (
    <LinearGradient colors={['#307BF6', '#307BF6', '#225CBD']} style={{ flex: 1 }}>
      <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />

      <View style={{ backgroundColor: '#fff', opacity: 0.075, width: widthPercentageToDP(60), height: heightPercentageToDP(30), borderRadius: heightPercentageToDP(1000), position: "absolute", left: widthPercentageToDP(-15), top: heightPercentageToDP(-5), zIndex: 0 }}></View>
      <View style={{ backgroundColor: '#fff', opacity: 0.075, width: widthPercentageToDP(90), height: heightPercentageToDP(45), borderRadius: heightPercentageToDP(1000), position: "absolute", alignSelf: 'center', top: heightPercentageToDP(-38), zIndex: 1 }}></View>
      <View style={{ backgroundColor: '#fff', opacity: 0.075, width: widthPercentageToDP(60), height: heightPercentageToDP(30), borderRadius: heightPercentageToDP(1000), position: "absolute", right: widthPercentageToDP(-35), top: heightPercentageToDP(10), zIndex: 2 }}></View>
      <View style={{ backgroundColor: '#fff', opacity: 0.05, width: widthPercentageToDP(60), height: heightPercentageToDP(30), borderRadius: heightPercentageToDP(1000), position: "absolute", right: widthPercentageToDP(-25), top: heightPercentageToDP(30), zIndex: 3 }}></View>

        <LottieView
            source={require('../assets/done.json')}
            style={{width: widthPercentageToDP(50), height: heightPercentageToDP(25), alignSelf: 'center', marginTop: heightPercentageToDP(30)}}
            loop={false}
            autoPlay
        />

    <Text style={{ color: '#fff', marginTop: heightPercentageToDP(2), fontSize: widthPercentageToDP(6), fontWeight: '500', fontFamily: 'RHDB', alignSelf: 'center' }}>
        Submited successfully
      </Text>
    </LinearGradient>
  );
};


export default Done;