import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Animated, FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import transaction from '../transactions.json';

const Dashboard = () => {
  const [transactions, setTransactions] = useState(transaction);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false); 
  const navigation = useNavigation();

  
  const cardHeight = useRef(new Animated.Value(heightPercentageToDP(90))).current;
  const cardTop = useRef(new Animated.Value(heightPercentageToDP(30))).current;
  const headerOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (searchQuery === '') {
      setTransactions(transaction);
    } else {
      const filtered = transaction.filter(t =>
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTransactions(filtered);
    }
  }, [searchQuery]);


  const toggleExpand = () => {
    if (isExpanded) {
      
      Animated.parallel([
        Animated.timing(cardHeight, {
          toValue: heightPercentageToDP(90),
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(cardTop, {
          toValue: heightPercentageToDP(30), 
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(headerOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setIsExpanded(false));
    } else {
     
      Animated.parallel([
        Animated.timing(cardHeight, {
          toValue: heightPercentageToDP(100),
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(cardTop, {
          toValue: heightPercentageToDP(10),
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(headerOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setIsExpanded(true));
    }
  };

  const renderTransaction = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          width: widthPercentageToDP(85),
          height: heightPercentageToDP(7),
          alignSelf: 'center',
          marginTop: heightPercentageToDP(2),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Transaction', { data: item.transaction_id })}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{ uri: item.logo }}
            style={{ width: widthPercentageToDP(12), height: heightPercentageToDP(6.5) }}
          />
          <View style={{ marginLeft: widthPercentageToDP(1) }}>
            <Text style={{ color: '#000', fontSize: widthPercentageToDP(4.5), fontFamily: 'RHDB' }}>
              {item.description}
            </Text>
            <Text style={{ color: '#000', fontSize: widthPercentageToDP(3), marginTop: heightPercentageToDP(0.5), fontFamily: 'PXNR' }}>
              {item.date}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: item.amount > 0 ? '#5DC486' : '#F54B5F',
              fontSize: widthPercentageToDP(4.5),
              fontFamily: 'PXNB',
              textAlign: 'right',
            }}
          >
            {item.amount > 0 ? `+${item.amount}` : item.amount}
          </Text>
          <View
            style={{
              width: widthPercentageToDP(18),
              paddingVertical: heightPercentageToDP(0.25),
              opacity: 1,
              backgroundColor:
                item.status === 'pending'
                  ? 'rgba(255, 184, 0, 0.2)'
                  : item.status === 'canceled'
                  ? 'rgba(255, 59, 59, 0.2)'
                  : 'rgba(0, 255, 148, 0.2)',
              marginTop: heightPercentageToDP(0.5),
              alignItems: 'center',
              alignSelf: 'flex-end',
              borderRadius: widthPercentageToDP(1),
              alignContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: widthPercentageToDP(3),
                textAlign: 'center',
                color: item.status === 'pending' ? '#F49A47' : item.status === 'canceled' ? '#F54B5F' : '#5DC486',
                alignSelf: 'center',
                fontFamily: 'PXNR',
              }}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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

      
      <Animated.View style={{ opacity: headerOpacity }}>
        <Text
          style={{
            color: '#fff',
            marginTop: heightPercentageToDP(10),
            fontSize: widthPercentageToDP(8),
            marginLeft: widthPercentageToDP(5),
            fontFamily: 'RHDB',
          }}
        >
          Dashboard
        </Text>

        <View
          style={{
            backgroundColor: '#fff',
            width: widthPercentageToDP(90),
            height: heightPercentageToDP(7),
            alignSelf: 'center',
            borderRadius: widthPercentageToDP(3),
            marginTop: heightPercentageToDP(3), // Gap between header and search bar
            marginBottom: heightPercentageToDP(2), // Added gap between search bar and card
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/search.png')}
            style={{ width: widthPercentageToDP(7), height: heightPercentageToDP(3.5), marginLeft: widthPercentageToDP(2) }}
          />
          <TextInput
            placeholder="Search transaction"
            placeholderTextColor={'#525252'}
            style={{
              width: widthPercentageToDP(70),
              height: heightPercentageToDP(8),
              fontSize: widthPercentageToDP(4.5),
              marginLeft: widthPercentageToDP(2),
              fontFamily: 'RHDSB',
            }}
            cursorColor={'#525252'}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
          />
        </View>
      </Animated.View>

      
      <Animated.View
        style={{
          backgroundColor: '#fff',
          width: widthPercentageToDP(90),
          height: cardHeight,
          position: 'absolute',
          top: cardTop,
          left: widthPercentageToDP(5),
          borderTopLeftRadius: widthPercentageToDP(5),
          borderTopRightRadius: widthPercentageToDP(5),
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(7),
            borderBottomWidth: 1,
            borderBottomColor: '#E0E8F2',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}
        >
          <Text style={{ color: '#26273A', fontSize: widthPercentageToDP(4.5), fontFamily: 'PXNB' }}>
            Transactions History
          </Text>
          <TouchableOpacity onPress={toggleExpand} style={{ padding: widthPercentageToDP(2), paddingHorizontal: widthPercentageToDP(5) }}>
            <Text style={{ color: '#26273A' }}>
              {isExpanded ? 'Collapse' : 'View all'}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={isExpanded ? transactions : transactions.slice(0, 15)}
          keyExtractor={(item) => item.transaction_id}
          renderItem={renderTransaction}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: heightPercentageToDP(7) }}
        />
      </Animated.View>
    </LinearGradient>
  );
};

export default Dashboard;