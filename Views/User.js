import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Footer from '../components/Footer';

const User = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ flex: 2 }}>Hello User</Text>
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
export default User;
