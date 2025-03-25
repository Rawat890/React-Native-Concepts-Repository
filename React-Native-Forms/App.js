import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Practice2 from './Formik/Practice Folder/Practice2';
import Form7 from './Formik/Form7';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Form7 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4cb050',
    backgroundColor: 'grey'
  },
  status1: {
    backgroundColor: 'grey'
  }
});
