import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Ques1 from './Ques1/Ques1.js';
import { Provider } from 'react-redux';
import store from './Ques1/store.js';

export default function App() {
  return (

    <Provider store={store}>
      <Ques1 />
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
