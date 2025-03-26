import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native'
import { Button, TextInput } from 'react-native';

function Form4() {

  //Step 1
  const form = useForm();

  //step 2 
  const { register, control, handleSubmit, formState: { errors } } = form;

  //step 3
  useEffect(() => {
    register('user')
    register('email')
    register('channel')
  }, [register])

  //step 4
  const onSubmit = data => console.log(data)

  return (
    <View style={{ marginTop: 100, padding: 20 }}>
      <Text>UserName</Text>
      <Controller name='user' control={control}
        rules={{ required: 'Required !!' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onChangeText={onChange} onBlur={onBlur} value={value} placeholder='Enter username' />
        )}
      />
      {errors.user && <Text style={{ color: 'red' }}>{errors.user.message}</Text>}

      <Text>Channel</Text>
      <Controller name='channel' control={control}
        rules={{
          required: 'Required !!'
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onChangeText={onChange} onBlur={onBlur} value={value} placeholder='Enter channel' />
        )}
      />
      {errors.channel && <Text style={{ color: 'red' }}>{errors.channel.message}</Text>}

      <Text>Email</Text>
      <Controller name='email' control={control}
        rules={{
          required: 'Required !!',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid Format'
          },
          validate: {
            notAdmin: (fieldValue) => {
              // Check if email is not "john@gmail.com"
              if (fieldValue !== 'john@gmail.com') {
                return 'Please enter admin email';
              }
              return true; // Email is valid
            }
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onChangeText={onChange} onBlur={onBlur} value={value} placeholder='Enter email' />
        )}
      />
      {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

      <Button onPress={handleSubmit(onSubmit)} title='Submit' />
    </View>
  )

}


export default Form4