import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function Form3() {

  //step 1
  const form = useForm();

  //step 2
  const { control, handleSubmit, register, formState: { errors } } = form;

  //step 3.
  useEffect(() => {
    register('userName');
    register('channel');
    register('email');
  }, [register]);

  //step 4
  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>YoutubeForm</Text>

      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        name="userName"
        rules={{
          required: 'Username is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.userName && <Text style={{ color: "red" }}>{errors.userName.message}</Text>}


      <Text style={styles.label}>Channel</Text>
      <Controller
        control={control}
        name="channel"
        rules={{ required: 'Channel name required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your channel"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.channel && <Text style={{ color: "red" }}>{errors.channel.message}</Text>}


      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        rules={{ required: 'Email required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.email && <Text style={{ color: "red" }}>{errors.email.message}</Text>}





      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

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

export default Form3;
