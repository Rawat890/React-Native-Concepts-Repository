import React, { useState } from 'react';
import { Formik } from 'formik';
import { Text, StyleSheet, View, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

function Form1() {
  // STATES
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [channel, setChannel] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            channel: ''
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <Text style={styles.formText}>YouTube Form</Text>

              <Text>Name</Text>
              <TextInput
                placeholder="Enter name..."
                onChangeText={handleChange('name')}
                value={values.name}
                style={styles.input}
              />

              <Text>E-mail</Text>
              <TextInput
                placeholder="Enter email..."
                onChangeText={handleChange('email')}
                value={values.email}
                style={styles.input}
              />

              <Text>Channel</Text>
              <TextInput
                placeholder="Enter channel..."
                onChangeText={handleChange('channel')}
                value={values.channel}
                style={styles.input}
              />

              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
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
    width: '100%',
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
});

export default Form1;
