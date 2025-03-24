import { TextInput, View, StyleSheet } from "react-native"

function Input({ placeholder, keyboard }) {
  return (

    <View style={styles.inputContainer}>
      <TextInput placeholder={placeholder} keyboardType={keyboard} />
    </View>
  )

}

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    padding: 6,
    borderRadius: 12,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 20
  }
})



export default Input