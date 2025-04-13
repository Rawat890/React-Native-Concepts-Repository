import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Form4 from './/React-Hook-Form/Practice-Folder/Form4'

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Form4 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4cb050',
  },
  status1: {
    backgroundColor: 'grey'
  }
});
