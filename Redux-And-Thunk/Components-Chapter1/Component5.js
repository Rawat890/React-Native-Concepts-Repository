import { Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, nothingAction, returnAction } from "../Chapter1/action1.js";
import Child1 from "./Child1.js";
import { getAddress, getName, newObject } from "../Chapter1/action2.js";

function Component5(params) {

  const dispatch = useDispatch()
  // const name = useSelector((state) => state.name)
  // const address = useSelector((state) => state.address)

  console.log('Rerendered 2')
  return (
    <View>
      {/* <Text>{name}</Text> */}
      {/* <Text>{address}</Text> */}
      <Button title="getData" />

    </View>
  )
}

export default Component5;