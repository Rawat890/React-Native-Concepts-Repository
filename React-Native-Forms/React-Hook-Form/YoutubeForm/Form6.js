//loading saved data as default value in fields
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const Form6 = () => {
  // Initialize react-hook-form with default values
  const { control, handleSubmit } = useForm({

    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json();

      return {
        userName: "Batman",
        channel: '',
        email: data.email
      }
    }
  });

  // For submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={value}  // Bind value from react-hook-form
            onChangeText={(text) => onChange(text)}  // Bind onChange handler
          />
        )}
        name="userName"  // Register field
      />

      <Text style={styles.label}>Channel</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your channel"
            value={value}
            onChangeText={(text) => onChange(text)}
          />
        )}
        name="channel"
      />

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={value}
            onChangeText={(text) => onChange(text)}
          />
        )}
        name="email"
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

export default Form6;
