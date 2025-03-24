import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const LoginForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text> Login Form </Text>
      <View>
        <TextInput placeholder="Enter Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

export default LoginForm;