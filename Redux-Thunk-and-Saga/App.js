// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './thunkExtraEfforts/store.js'; // Import your store correctly
import Component1 from './thunkExtraEfforts/Component1.js';
import Component2 from './thunkExtraEfforts/Component2.js';

function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>  {/* Wrap your components with the Provider */}
        <Component1 />
        <Component2 />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10
  },
});

export default App;
