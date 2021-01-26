import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from '../components/Footer';
import TransactionsList from '../components/TransactionsList';

const Transactions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 30 }}>
        <Text>Transactions</Text>
      </View>
      <View style={{ flex: 8, height: 200 }}>
        <TransactionsList />
      </View>
      <View style={{ height: 40 }}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
});
export default Transactions;
