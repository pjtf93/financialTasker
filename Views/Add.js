import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Footer from '../components/Footer';
import { DataStore } from '@aws-amplify/datastore';
import { Transaction } from '../src/models';

const Add = ({ navigation }) => {
  const [value, setValue] = useState();
  const [note, setNote] = useState();

  /*  const formValues = {
    amount: parseInt(value),
    description: note,
    id: note,
    accountID: note,
    categoriesID: note,
  }; */

  const addTransaction = async () => {
    await DataStore.save(
      new Transaction({
        details: note,
        amount: parseInt(value),
      })
    );
  };
  //   const addTransaction = async () => {
  //     if (value !== '' && note !== '')
  //       try {
  //         await API.graphql(
  //           graphqlOperation(createTransaction, { input: formValues })
  //         );
  //       } catch (error) {
  //         console.log('error adding transaction:', error);
  //       }
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2, marginHorizontal: 20 }}>
        <View style={styles.inputs}>
          <TextInput placeholder="Add" onChangeText={(e) => setValue(e)} />
        </View>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Add a description"
            onChangeText={(e) => setNote(e)}
          />
        </View>
        <Button title="Send" onPress={addTransaction} />
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
  inputs: {
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    color: '#000',
    fontSize: 24,
    marginVertical: 20,
  },
});

export default Add;
