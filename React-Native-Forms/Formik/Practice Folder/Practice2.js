import { useFormik } from 'formik';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, Pressable } from 'react-native';
import React from 'react';
function Practice2() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      gender: '',
      phone: '',
      dob: '',
      street: '',
      city: '',
      state: '',
      postal: '',
    },
    onSubmit: (values) => console.log('The values are - ', values),

    //validating errors
    validate: (values) => {
      let errors = {};

      if (!values.fullName) {
        errors.fullName = 'Full name Required';
      }

      if (!values.phone) {
        errors.phone = 'Phone no. Required';
      }

      if (!values.gender) {
        errors.gender = 'Gender Required';
      } else if (values.gender !== 'Male' || values.gender !== 'female') {
        errors.gender = 'This is no gender type'
      }

      if (!values.dob) {
        errors.dob = 'DOB Required';
      }

      if (!values.street) {
        errors.street = 'Street address Required';
      }

      if (!values.city) {
        errors.city = 'City Required';
      }

      if (!values.state) {
        errors.state = 'State Required';
      }

      if (!values.postal) {
        errors.postal = 'Postal code Required';
      }

      return errors;
    },
    validateOnBlur: false,  // Disable immediate validation on blur
    validateOnChange: false, // Disable immediate validation on change
  });

  // Logging touched to see the status of fields
  console.log(formik.touched);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Patient Details</Text>
        <Text style={styles.headerDescription}>Fill the form below and we will be back soon with updates</Text>
      </View>
      <KeyboardAvoidingView style={styles.keyBoard}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder='Enter full name...'
              style={styles.input}
              onChangeText={formik.handleChange('fullName')}
              value={formik.values.fullName}
              onBlur={formik.handleBlur('fullName')}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.fullName}</Text>
            )}

            <Text style={styles.label}>Gender</Text>
            <TextInput
              placeholder='Enter gender...'
              style={styles.input}
              onChangeText={formik.handleChange('gender')}
              value={formik.values.gender}
              onBlur={formik.handleBlur('gender')}
            />
            {formik.touched.gender && formik.errors.gender && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.gender}</Text>
            )}

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder='Enter phone...'
              keyboardType='num-pad'
              style={styles.input}
              onChangeText={formik.handleChange('phone')}
              value={formik.values.phone}
              onBlur={formik.handleBlur('phone')}
            />
            {formik.touched.phone && formik.errors.phone && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.phone}</Text>
            )}

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              placeholder='Enter dob...'
              style={styles.input}
              onChangeText={formik.handleChange('dob')}
              value={formik.values.dob}
              onBlur={formik.handleBlur('dob')}
            />
            {formik.touched.dob && formik.errors.dob && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.dob}</Text>
            )}

            <Text style={styles.label}>Street Address</Text>
            <TextInput
              placeholder='Enter street...'
              style={styles.input}
              onChangeText={formik.handleChange('street')}
              value={formik.values.street}
              onBlur={formik.handleBlur('street')}
            />
            {formik.touched.street && formik.errors.street && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.street}</Text>
            )}

            <Text style={styles.label}>City</Text>
            <TextInput
              placeholder='Enter city...'
              style={styles.input}
              onChangeText={formik.handleChange('city')}
              value={formik.values.city}
              onBlur={formik.handleBlur('city')}
            />
            {formik.touched.city && formik.errors.city && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.city}</Text>
            )}

            <Text style={styles.label}>State</Text>
            <TextInput
              placeholder='Enter state...'
              style={styles.input}
              onChangeText={formik.handleChange('state')}
              value={formik.values.state}
              onBlur={formik.handleBlur('state')}
            />
            {formik.touched.state && formik.errors.state && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.state}</Text>
            )}

            <Text style={styles.label}>Postal/Zip code</Text>
            <TextInput
              placeholder='Enter postal/zip...'
              style={styles.input}
              onChangeText={formik.handleChange('postal')}
              value={formik.values.postal}
              onBlur={formik.handleBlur('postal')}
            />
            {formik.touched.postal && formik.errors.postal && (
              <Text style={{ color: 'red', fontSize: 12, marginBottom: 5 }}>{formik.errors.postal}</Text>
            )}

            <Pressable style={styles.button} onPress={formik.handleSubmit}>
              <Text style={styles.btnText}>Submit Form</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  keyBoard: {
    flex: 1,
    backgroundColor: '#52B255',
    width: '99%',
    marginLeft: 2,
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 10,
    marginLeft: 6,
  },
  headerContainer: {
    backgroundColor: '#693BA0',
    padding: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 4,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FF0033',
    marginTop: 30,
  },
  headerDescription: {
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 15,
  },
  input: {
    color: '#08868B',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    padding: 8,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#FFB40C',
    width: '50%',
    marginLeft: 80,
    marginBottom: 50,
    borderColor: 'grey',
    borderWidth: 1
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default Practice2;
