import React from 'react'
import { Text, StyleSheet, View, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import { useFormik } from 'formik'

// Form Validation
function Form4() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '', confirmPassword: ''
    },
    onSubmit: (values) => console.log(values),
    validate: values => {
      //values.name, values.email, values.password

      let errors = {}

      if (!values.name) {
        errors.name = 'Name Required'
      }

      if (!values.password) {
        errors.password = 'Password Required'
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password'
      }

      if (!values.email) {
        errors.email = 'Email Required'
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Invalid email format'
      }

      return errors;  //returns errors object

    }//validate function assigned to validate property of useFormik hook
  })


  console.log(formik.errors)
  return (
    <KeyboardAvoidingView style={styles.keyBoardContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.headText}>YouTube Form</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.formContent}>
              <Text>Name</Text>
              <TextInput
                placeholder='Enter name...'
                onChangeText={formik.handleChange('name')}
                value={formik.values.name}
                style={styles.input}
              />
              {formik.errors.name ? <Text style={{
                color: 'red', fontSize: 14,
              }}>{formik.errors.name}</Text> : null}


              <Text>E-mail</Text>
              <TextInput
                placeholder='Enter email...'
                onChangeText={formik.handleChange('email')}
                value={formik.values.email}
                style={styles.input}
              />
              {formik.errors.email ? <Text style={{
                color: 'red', fontSize: 14,
              }}>{formik.errors.email}</Text> : null}


              <Text>Password</Text>
              <TextInput
                placeholder='Enter password...'
                onChangeText={formik.handleChange('password')}
                value={formik.values.password}
                style={styles.input}
                secureTextEntry
              />
              {formik.errors.password ? <Text style={{
                color: 'red', fontSize: 14,
              }}>{formik.errors.password}</Text> : null}

              <Text>Confirm Password</Text>
              <TextInput
                placeholder='Enter password...'
                onChangeText={formik.handleChange('confirmPassword')}
                value={formik.values.confirmPassword}
                style={styles.input}
                secureTextEntry
              />
              {formik.errors.confirmPassword ? <Text style={{
                color: 'red', fontSize: 14,
              }}>{formik.errors.confirmPassword}</Text> : null}


              <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.btnText}>Log In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  keyBoardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1, // Responsive width
    marginTop: 10,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  head: {
    backgroundColor: '#067F7B',
    height: 120, // Fixed height for the header
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 0
  },
  headText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: -10,
  },
  form: {
    width: '100%',
    marginTop: -20,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  formContent: {
    marginTop: 20,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 2,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#067F7B',
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Form4
