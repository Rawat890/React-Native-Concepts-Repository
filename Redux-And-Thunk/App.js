import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component4 from './Components-Chapter1/Component4';
import { Provider } from 'react-redux';
import { store } from './Chapter1/action1.js';
import Component1 from './Components-Chapter1/Component1.js';
import Component2 from './Components-Chapter1/Component2.js';
import Component3 from './Components-Chapter1/Component3.js';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Component1 />
        <Component2 />
        <Component3 />
      </View>
    </Provider>
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
