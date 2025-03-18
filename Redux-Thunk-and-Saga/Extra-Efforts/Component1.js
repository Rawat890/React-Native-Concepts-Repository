import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "./action";

function Component1(params) {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  console.log("1 rendered")
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>Component1</Text>
      <Button title='Increment' onPress={() => dispatch(incrementCounter())} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10
  },
});

export default Component1;