import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '../actions/action1'

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  incrementCounter, decrementCounter
}

class Component5 extends Component {
  render() {
    const { counter, incrementCounter, decrementCounter } = this.props
    return (
      <View>
        <Text>{counter}</Text>
        <Button title="Increment" onPress={incrementCounter} />
        <Button title="Decrement" onPress={decrementCounter} />
      </View>
    )
  }
}

Component5.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Component5)
