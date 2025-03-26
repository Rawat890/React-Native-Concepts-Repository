import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';


const Form2 = () => {

  let renderCount = useRef(0)
  const form = useForm();
  const { register, handleSubmit, setValue } = form;

  renderCount.current += 1
  useEffect(() => {
    register('userName');
    register('channel');
    register('email');
  }, [register]);

  const onSubmit = (data) => {
    console.log(data);
  };



  return (
    <View style={styles.container}>
      <Text style={styles.label}>YoutubeForm ({renderCount.current})</Text>
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

export default Form2;
