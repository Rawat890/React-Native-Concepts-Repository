import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function SimpleForm() {
  const form = useForm({
    defaultValues: {
      userName: 'Rohan',
      password: '',
      phoneNumbers: ["", ""],
      age: 0
    }
  });

  const { control, handleSubmit, formState: { errors }, watch } = form

  const onSubmit = (values) => {
    console.log(values)
  }
  const watchUser = watch()

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(watchUser)}</Text>
      <Text style={styles.label}>Username</Text>

      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )} name='userName' />

      <Text>Password</Text>
      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )} name='password' />

      <Text>Age</Text>
      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Enter age"
          value={value}
          onChangeText={(text) => onChange(text ? Number(text) : 0)}
          onBlur={onBlur}
        />
      )} name='age' />


      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default SimpleForm;
