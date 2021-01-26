import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Transactions"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View>
        <Button title=" Add" onPress={() => navigation.navigate('Add')} />
      </View>
      <View>
        <Button title=" User" onPress={() => navigation.navigate('User')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    justifyContent: 'center',
    width: '30%',
  },
});

export default Footer;
