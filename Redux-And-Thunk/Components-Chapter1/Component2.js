import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Chapter1/action1.js';

//What happens if you dispatch an action in useEffect without any dependencies? Will it cause an infinite loop?


const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  console.log("rendered 1")

  // useEffect(() => {
  //   // Dispatch action only once when the component mounts
  //   dispatch(increment());
  //   console.log('I rendered')
  // }, []); // Empty dependency array means this effect runs only once

  return <View>

    <Text>Check Redux for state updates!</Text>
    <Button title='Increment' />
  </View>;
};

export default CounterComponent;
