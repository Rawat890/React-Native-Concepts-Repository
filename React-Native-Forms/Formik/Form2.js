import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native'
import { Formik, useFormik } from 'formik'


function Form2(params) {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => console.log(values)
  })


  return (
    <View style={styles.formContainer}>
      <Text style={styles.formText}>YouTube Form</Text>

      <Text>Name</Text>
      <TextInput
        placeholder="Enter name..."
        onChangeText={formik.handleChange('name')}
        value={formik.values.name}
        style={styles.input}
      />

      <Text>E-mail</Text>
      <TextInput
        placeholder="Enter email..."
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        style={styles.input}
      />

      <Text>Channel</Text>
      <TextInput
        placeholder="Enter channel..."
        onChangeText={formik.handleChange('channel')}
        value={formik.values.channel}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    marginTop: 20
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    width: '78%',
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  formText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    padding: 10,
    backgroundColor: '#4cb050',
    marginTop: 15,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
})
export default Form2