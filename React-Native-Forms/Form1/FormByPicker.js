import { View, StyleSheet, Text, Button } from "react-native"
import Input from "./Input"
import PickComponent from "./PickComponent"
function FormByPicker(params) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up Form</Text>
      <Input placeholder="Email address" label="Email" />
      <Input placeholder="Password" label="Password" />
      <PickComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '90%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    borderRadius: 20,
    elevation: 4,
    borderColor: 'white',
    borderWidth: 3
  },
  text: {
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 15
  }
})

export default FormByPicker