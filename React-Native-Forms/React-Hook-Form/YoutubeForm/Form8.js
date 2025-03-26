import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

//Arrays - want to store the current and emergency phone number of an employee

const Form8 = () => {

  // Initialize react-hook-form with default values
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: 'Bats',
      email: 'rohan123@gmail.com',
      channel: '',
      social: {
        twitter: '',
        instagram: ''
      },
      phoneNumbers: ["", ""]
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
            value={value}
            onChangeText={(text) => onChange(text)}
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

      <Text style={styles.label}>Twitter Id</Text>
      <Controller name='social.twitter' control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} placeholder='Enter twitter id..' onChangeText={onChange} onBlur={onBlur} value={value} />
      )} />

      <Text style={styles.label}>Instagram Id</Text>
      <Controller name='social.instagram' control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} placeholder='Enter instagram id..' onChangeText={onChange} onBlur={onBlur} value={value} />
      )} />

      <Text style={styles.label}>Primary Number</Text>
      <Controller name='phoneNumbers.0' control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} placeholder='Enter primary phone..' onChangeText={onChange} onBlur={onBlur} value={value} />
      )} />

      <Text style={styles.label}>Secondary Number</Text>
      <Controller name='phoneNumbers.1' control={control} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} placeholder='Enter secondary phone..' onChangeText={onChange} onBlur={onBlur} value={value} />
      )} />


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

export default Form8;
