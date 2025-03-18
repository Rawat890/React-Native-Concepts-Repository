import { View, Text, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../Chapter1/action1"
function Child1(params) {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  function handle() {
    dispatch(increment())
  }

  console.log("Child1")
  console.log('Rerendered')
  return (
    <View>
      <Text>{counter}</Text>
      {/* <Button title="Nothing" onPress={() => dispatch({ type: 'MULTIPLY' })} /> */}
      <Button title="Nothing" onPress={handle} />
    </View>
  )

}

export default Child1;