import { useFormik } from 'formik'
import React from 'react'
import { Text, View, StyleSheet, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import * as Yup from 'yup'

// initial Values
const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

const onSubmit = values => {
  console.log(values)
}

// validation schema object
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  phone: Yup.string().required('Phone no. required').length(10, 'Phone no. must have length 10'),
  message: Yup.string().required('Message is required')
})

function Form7() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>

      <KeyboardAvoidingView style={styles.keyBoard} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                placeholder="Enter name..."
                style={styles.inputBox}
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
                value={formik.values.name}
              />
            </View>
            {formik.touched.name && formik.errors.name && (
              <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.name}</Text>
            )}

            <View style={styles.input}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput
                placeholder="Enter email..."
                style={styles.inputBox}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
              />
            </View>
            {formik.touched.email && formik.errors.email && (
              <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.email}</Text>
            )}

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                placeholder="Enter phone..."
                style={styles.inputBox}
                keyboardType="numeric"
                onChangeText={formik.handleChange('phone')}
                onBlur={formik.handleBlur('phone')}
                value={formik.values.phone}
              />
            </View>
            {formik.touched.phone && formik.errors.phone && (
              <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.phone}</Text>
            )}

            <View style={styles.msgContainer}>
              <Text style={styles.msgLabel}>Comment here</Text>
              <TextInput
                placeholder="Enter your message..."
                style={styles.msgBox}
                onChangeText={formik.handleChange('message')}
                onBlur={formik.handleBlur('message')}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && (
                <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.message}</Text>
              )}
            </View>

            <Pressable style={styles.button} onPress={formik.handleSubmit}>
              <Text style={styles.btnText}>Submit Form</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  keyBoard: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 10,
    marginLeft: 6,
  },
  header: {
    backgroundColor: '#F3115D',
    height: 180,
  },
  headerText: {
    marginTop: 115,
    fontSize: 30,
    marginLeft: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
    width: '99%',
    marginLeft: 2,
  },
  inputLabel: {
    fontWeight: '600',
    fontSize: 15,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  inputBox: {
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRadius: 10,
    height: 50,
    width: '65%',
  },
  button: {
    padding: 8,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#F3115D',
    width: '50%',
    marginLeft: 90,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  msgContainer: {
    marginTop: 10,
    width: '97%',
    marginLeft: 3,
    alignItems: 'center',
  },
  msgLabel: {
    fontSize: 16,
  },
  msgBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 150,
    marginTop: 10,
  },
})

export default Form7
