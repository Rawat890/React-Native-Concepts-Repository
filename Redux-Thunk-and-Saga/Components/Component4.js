import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getName, getAge, getDegree } from "../actions/action2.js";

function Component4() {
  const dispatch = useDispatch();

  // Correctly access state properties
  const name = useSelector(state => state.name);
  const age = useSelector(state => state.age);
  const degree = useSelector(state => state.degree);

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Degree: {degree}</Text>

      {/* Buttons to dispatch actions */}

    </View>
  );
}

export default Component4;