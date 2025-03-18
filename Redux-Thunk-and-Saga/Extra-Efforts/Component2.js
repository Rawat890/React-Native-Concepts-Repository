import { View, Text, Button, StyleSheet } from "react-native";
import { decrementCounter } from "./action";
import { useDispatch, useSelector } from "react-redux";

function Component2(params) {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  console.log("2 rendered")

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Component2</Text>
      <Button title='Decrement' onPress={() => dispatch(decrementCounter())} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10
  },
});
export default Component2;