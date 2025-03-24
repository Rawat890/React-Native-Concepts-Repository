import { useForm, Controller } from "react-hook-form";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

function Form1(params) {

  const { control, handleSubmit, formState: { errors } } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>

      <View>
        <Text>Username</Text>
        <Controller control={control} render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Enter username" value={value} onChangeText={onChange} />
        )} name="username"
          rules={{ required: 'Username is required' }}
        />
        {errors.username && <Text>{errors.username.message}</Text>}
      </View>

      <View>
        <Text>Password</Text>
        <Controller control={control} name="password" render={({ field: { onChange, value } }) => (
          <TextInput value={value}
            onChangeText={onChange} placeholder="password" />
        )}
          rules={{
            required: 'Password required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid password'
            }

          }}
        />
        {errors.password && <Text>{errors.password.message}</Text>}
      </View>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </>
  )
}


const styles = StyleSheet.create({
  container: {

  }
})
export default Form1;