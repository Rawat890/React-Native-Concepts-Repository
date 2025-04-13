import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Example2 from './Selected-List/SelectList1';
import SelectList1 from './Selected-List/SelectList1';

export default function App() {
  return (
    <View style={styles.container}>
      <SelectList1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
