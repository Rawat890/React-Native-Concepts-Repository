import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';  // Importing useForm and Controller

const YouTube = () => {
  // Initialize react-hook-form
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Hook Form Example</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text>Username</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder="Enter your username"
            />
          )}
          name="username"
          rules={{ required: 'Username is required' }}
        />
        {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder="Enter your email"
            />
          )}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      </View>

      {/* Channel Input */}
      <View style={styles.inputContainer}>
        <Text>Channel</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder="Enter your channel"
            />
          )}
          name="channel"
          rules={{
            required: 'Channel required',
            pattern: {
              message: 'Channel required'
            }
          }}
        />
        {/* No validation error message for channel */}
      </View>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default YouTube;
