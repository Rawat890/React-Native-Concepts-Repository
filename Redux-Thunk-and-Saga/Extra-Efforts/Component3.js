import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
function Component3(params) {
  console.log("3 rendered")
  const counter = useSelector(state => state.counter)

  return (
    <View>
      <Text style={{ textAlign: 'center' }}>{counter}</Text>
    </View>
  )
}

export default Component3;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10
  },
});
