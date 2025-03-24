import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form5 from './Formik/Form5.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Form5 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#4cb050'
    backgroundColor: 'grey'
  }
});
