import { Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, nothingAction } from "../Chapter1/action1.js";

function Component1(params) {

  const dispatch = useDispatch()
  const counter = useSelector(() => { })

  function handle() {
    dispatch(increment())
  }

  console.log('Rerendered')
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Nothing" onPress={handle} />
    </View>
  )
}

export default Component1;