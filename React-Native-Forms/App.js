import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import Form9 from './React-Hook-Form/YoutubeForm/Form9';

export default function App() {


  return (
    <>
      <StatusBar style='light' />
      <Form9 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4cb050',
  },
  status1: {
    backgroundColor: 'grey'
  }
});
