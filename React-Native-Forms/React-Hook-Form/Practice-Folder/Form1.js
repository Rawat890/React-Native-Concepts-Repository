import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

function Form1() {
  const form = useForm({
    defaultValues: {
      userName: 'Rohan Rawat',
      email: 'rohanrawat7508@gmail.com',
      password: ''
    }
  });

  const { control, handleSubmit, formState: { errors } } = form;

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  // This function will log data as the user types
  const onFieldChange = (name, value) => {
    console.log(`${name} changed to:`, value);
  };

  return (
    <View>
      <Text>Username</Text>
      <Controller
        name="userName"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter name.."
            onChangeText={(value) => {
              onChange(value);
              onFieldChange('userName', value);  // Logs the data change as user types
            }}
            onBlur={onBlur}
            value={value}
          />
        )}
        rules={{ required: 'Username required' }}
      />
      {errors.userName && <Text>{errors.userName.message}</Text>}

      <Text>Email</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter email.."
            onChangeText={(value) => {
              onChange(value);
              onFieldChange('email', value);  // Logs the data change as user types
            }}
            onBlur={onBlur}
            value={value}
          />
        )}
        rules={{ required: 'Email required' }}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Text>Password</Text>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter password.."
            onChangeText={(value) => {
              onChange(value);
              onFieldChange('password', value);  // Logs the data change as user types
            }}
            onBlur={onBlur}
            value={value}
            secureTextEntry={true}
          />
        )}
        rules={{ required: 'Password required' }}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default Form1;
