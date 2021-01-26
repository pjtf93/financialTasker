import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TransactionItem = ({ description, amount, type }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.amount}>{description}</Text>
      </View>
      <View>
        <Text
          style={{
            color: type === 'add' ? '#3b6026' : '#e01f25',
            fontSize: 20,
          }}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  amount: {
    fontSize: 20,
  },
});

export default TransactionItem;
