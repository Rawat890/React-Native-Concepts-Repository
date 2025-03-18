import { Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, nothingAction, returnAction } from "../Chapter1/action1.js";
import Child1 from "./Child1.js";

function Component3(params) {

  // const dispatch = useDispatch()
  // const counter = useSelector(() => { })

  // function handle() {
  //   dispatch(returnAction())
  // }

  console.log('Rerendered')
  return (
    <View>
      {/* <Child1 /> */}
      <Text>Comp 3</Text>
    </View>
  )
}

export default Component3;