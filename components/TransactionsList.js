import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import TransactionItem from './TransactionItem';
import { DataStore } from '@aws-amplify/datastore';
import { Transaction } from '../src/models';

const TransactionsList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      const datos = await DataStore.query(Transaction);
      setData(datos);
    };
    getTransactions();
    DataStore.observe(Transaction).subscribe(() => {
      getTransactions();
    });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TransactionItem description={item.details} amount={item.amount} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TransactionsList;
