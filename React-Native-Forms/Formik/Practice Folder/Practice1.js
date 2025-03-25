import { useFormik } from 'formik';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, Pressable } from 'react-native'


function Practice1(params) {

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
      let errors = {}

      if (!values.fullName) {
        errors.fullName = 'Full name Required'
      }

      if (!values.phone) {
        errors.phone = 'Phone no. Required'
      }

      if (!values.gender) {
        errors.gender = 'Gender Required'
      }

      if (!values.dob) {
        errors.dob = 'DOB Required'
      }

      if (!values.street) {
        errors.street = 'Street address Required'
      }

      if (!values.city) {
        errors.city = 'City Required'
      }

      if (!values.state) {
        errors.state = 'State Required'
      }

      if (!values.postal) {
        errors.postal = 'Postal code Required'
      }

      return errors
    }
  })



  return (

    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Patient Details</Text>
        <Text style={styles.headerDescription}>Fill the form below and we will be back soon with updates</Text>
      </View>
      <KeyboardAvoidingView style={styles.keyBoard}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.inputContainer}>

            <Text style={styles.label}>Full Name</Text>
            <TextInput placeholder='Enter full name...' style={styles.input} onChangeText={formik.handleChange('fullName')} value={formik.values.fullName} />
            {formik.errors.fullName ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.fullName}</Text> : null}

            <Text style={styles.label}>Gender</Text>
            <TextInput placeholder='Enter gender...' style={styles.input} onChangeText={formik.handleChange('gender')} value={formik.values.gender} />
            {formik.errors.gender ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.gender}</Text> : null}


            <Text style={styles.label}>Phone Number</Text>
            <TextInput placeholder='Enter phone...' keyboardType='num-pad' style={styles.input} onChangeText={formik.handleChange('phone')} value={formik.values.phone} />
            {formik.errors.phone ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.phone}</Text> : null}



            <Text style={styles.label}>Date of Birth</Text>
            <TextInput placeholder='Enter dob...' style={styles.input} onChangeText={formik.handleChange('dob')} value={formik.values.dob} />
            {formik.errors.dob ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.dob}</Text> : null}



            <Text style={styles.label}>Street Address</Text>
            <TextInput placeholder='Enter street...' style={styles.input} onChangeText={formik.handleChange('street')} value={formik.values.street} />
            {formik.errors.street ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.street}</Text> : null}



            <Text style={styles.label}>City</Text>
            <TextInput placeholder='Enter city...' style={styles.input} onChangeText={formik.handleChange('city')} value={formik.values.city} />
            {formik.errors.city ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.city}</Text> : null}



            <Text style={styles.label}>State</Text>
            <TextInput placeholder='Enter state...' style={styles.input} onChangeText={formik.handleChange('state')} value={formik.values.state} />
            {formik.errors.state ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.state}</Text> : null}



            <Text style={styles.label}>Postal/Zip code</Text>
            <TextInput placeholder='Enter postal/zip...' style={styles.input} onChangeText={formik.handleChange('postal')} value={formik.values.postal} />
            {formik.errors.postal ? <Text style={{ color: 'red', fontSize: 14 }}>{formik.errors.postal}</Text> : null}




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
    backgroundColor: '#52B255',
    width: '99%',
    marginLeft: 2,
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 10,
    marginLeft: 6
  },
  headerContainer: {
    backgroundColor: '#693BA0',
    padding: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 4

  },
  headerText: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FF0033', marginTop: 30
  },
  headerDescription: {
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  inputContainer: {
    marginTop: 15,
  },
  input: {
    color: '#08868B'
  },
  label: {
    color: 'black', fontWeight: 'bold',
    fontSize: 15
  },
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#FFB40C',
    width: '50%',
    marginLeft: 80,
    marginBottom: 50,

  },
  btnText: {
    fontSize: 18,
    color: 'white', textAlign: 'center',
  }

})
export default Practice1;