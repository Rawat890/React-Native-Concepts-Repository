import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/action1';

function Component2(params) {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  /*

  function handle(params) {
    if (counter > 0) {
      dispatch(decrementCounter())
    } else {
      console.log("Minimum limit")
    }
  }
*/
  function handleInc(params) {
    if (counter >= 0 && counter < 10) {
      dispatch(incrementCounter())
    } else {
      console.log("Maximum limit")
    }
  }


  return (
    <View>
      <Text> textInComponent </Text>
      <Button title='Increment' onPress={handleInc
      } />

    </View>
  )

}

const styles = StyleSheet.create({

})
export default Component2