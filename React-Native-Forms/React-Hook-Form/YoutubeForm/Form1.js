import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

const Form1 = () => {

  //initialized a react hook form
  const form = useForm();

  //accessing the properties of useForm Object
  const { register, handleSubmit, setValue } = form;

  //register the fields to the form
  useEffect(() => {
    register('userName');
    register('channel');
    register('email');
  }, [register])

  //For submission
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        {...register('userName')}
        onChangeText={(text) => setValue('userName', text)}
      />

      <Text style={styles.label}>Channel</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your channel"
        onChangeText={(text) => setValue('channel', text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(text) => setValue('email', text)}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default Form1;
