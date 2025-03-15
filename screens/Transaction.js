import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ModalDropdown from 'react-native-modal-dropdown'; // Import new dropdown library
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import transaction from '../transactions.json';

const Transaction = () => {
  const route = useRoute();
  const [transactions, setTransactions] = useState(transaction);
  const data = route.params.data;
  const navigation = useNavigation();
  const [selectedAccountCategory, setSelectedAccountCategory] = useState("all");
  const transactionDetails = transactions.filter((item) => item.transaction_id === data);
  const [selectedPayee, setSelectedPayee] = useState(transactionDetails[0]?.description || "Amazon");
  console.log(transactionDetails);

  
  const payeeOptions = ["Youtube", "Facebook", "Amazon", "Ai Test"];


  const accountCategoryOptions = [
    "All Account Types",
    "Savings Account",
    "Current Account",
    "Fixed Deposit",
    "Recurring Deposit",
    "Money Market",
    "Joint Account",
    "NRI Account",
    "Business Account",
    "Salary Account",
    "Loan Account",
    "Demat Account",
  ];

  return (
    <LinearGradient colors={['#307BF6', '#225CBD', '#225CBD']} style={{ flex: 1 }}>
      <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />

      <View style={{ backgroundColor: '#fff', opacity: 0.075, width: widthPercentageToDP(60), height: heightPercentageToDP(30), borderRadius: heightPercentageToDP(1000), position: "absolute", left: widthPercentageToDP(-15), top: heightPercentageToDP(-5), zIndex: 0 }}></View>
      <View style={{ backgroundColor: '#fff', opacity: 0.075, width: widthPercentageToDP(90), height: heightPercentageToDP(45), borderRadius: heightPercentageToDP(1000), position: "absolute", alignSelf: 'center', top: heightPercentageToDP(-38), zIndex: 1 }}></View>
      <View style={{ backgroundColor: '#fff', opacity: 0.075, width: widthPercentageToDP(60), height: heightPercentageToDP(30), borderRadius: heightPercentageToDP(1000), position: "absolute", right: widthPercentageToDP(-35), top: heightPercentageToDP(10), zIndex: 2 }}></View>
      <View style={{ backgroundColor: '#fff', opacity: 0.05, width: widthPercentageToDP(60), height: heightPercentageToDP(30), borderRadius: heightPercentageToDP(1000), position: "absolute", right: widthPercentageToDP(-25), top: heightPercentageToDP(30), zIndex: 3 }}></View>

      <Text style={{ color: '#fff', marginTop: heightPercentageToDP(10), fontSize: widthPercentageToDP(8), marginLeft: widthPercentageToDP(5), fontFamily: 'RHDB' }}>
        Transaction Details
      </Text>

      <View style={{ backgroundColor: '#fff', width: widthPercentageToDP(90), height: heightPercentageToDP(60), alignSelf: 'center', borderTopLeftRadius: widthPercentageToDP(5), borderTopRightRadius: widthPercentageToDP(5), marginTop: heightPercentageToDP(5), overflow: 'hidden', }}>
        <View style={{ width: widthPercentageToDP(100), borderBottomColor: '919191', borderBottomWidth: 1, height: heightPercentageToDP(6), borderStyle: 'dashed', alignSelf: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#26273A', alignSelf: 'center', textAlign: 'center', width: widthPercentageToDP(100), fontWeight: '500', fontSize: widthPercentageToDP(4.5) }}>TRANSACTION</Text>
        </View>

        <View style={{ marginTop: heightPercentageToDP(2) }}>
          <View style={styles.row}><Text style={styles.label}>Transaction Id</Text><Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">{transactionDetails[0].transaction_id}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Token Id</Text><Text style={styles.value}>{transactionDetails[0].token_id}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Date</Text><Text style={styles.value}>{transactionDetails[0].date}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Description</Text><Text style={styles.value}>{transactionDetails[0].description}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Currency</Text><Text style={styles.value}>{transactionDetails[0].currency}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Amount</Text><Text style={styles.value}>{transactionDetails[0].amount}</Text></View>
          <View style={styles.row}>
            <Text style={styles.label}>Payee</Text>
            <ModalDropdown
              options={payeeOptions}
              defaultValue={selectedPayee}
              onSelect={(index, value) => setSelectedPayee(value)}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownList}
              dropdownTextStyle={styles.dropdownListText}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Account Category</Text>
            <ModalDropdown
              options={accountCategoryOptions}
              defaultValue={selectedAccountCategory}
              onSelect={(index, value) => setSelectedAccountCategory(value)}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownList}
              dropdownTextStyle={styles.dropdownListText}
            />
          </View>
          <View style={styles.row}><Text style={styles.label}>Status</Text><Text style={styles.value}>{transactionDetails[0].status}</Text></View>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', width: widthPercentageToDP(90), height: heightPercentageToDP(15), alignSelf: 'center', borderBottomLeftRadius: widthPercentageToDP(5), borderBottomRightRadius: widthPercentageToDP(5), marginTop: heightPercentageToDP(1), overflow: 'hidden' }}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Done')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', backgroundColor: '#2563C9', width: widthPercentageToDP(18), height: heightPercentageToDP(9), borderRadius: widthPercentageToDP(100), alignSelf: 'center', bottom: heightPercentageToDP(20), justifyContent: 'center' }}>
        <View style={{ backgroundColor: '#fff', width: widthPercentageToDP(8), height: heightPercentageToDP(4), borderRadius: widthPercentageToDP(100), alignSelf: 'center' }}></View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: heightPercentageToDP(1), width: widthPercentageToDP(80), alignSelf: 'center', alignItems: 'center' },
  label: { fontWeight: 'bold', fontSize: 16 },
  value: { fontSize: 16, color: '#888', width: widthPercentageToDP(40), textAlign: 'right' },
  button: { backgroundColor: '#0D6EFD', width: widthPercentageToDP(70), alignSelf: 'center', paddingHorizontal: widthPercentageToDP(5), paddingVertical: heightPercentageToDP(1.5), borderRadius: 10, alignItems: 'center', marginTop: heightPercentageToDP(6) },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  dropdown: {
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(4),
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: widthPercentageToDP(2),
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingHorizontal: widthPercentageToDP(2),
  },
  dropdownText: {
    fontSize: widthPercentageToDP(3.5),
    color: '#26273A',
    textAlign: 'center'
  },
  dropdownList: {
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(12),
    backgroundColor: '#F5F5F5',
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(-3),
    marginLeft: widthPercentageToDP(10)
  },
  dropdownListText: {
    fontSize: widthPercentageToDP(3),
    color: '#26273A',
    paddingVertical: heightPercentageToDP(1),
  },
});

export default Transaction;