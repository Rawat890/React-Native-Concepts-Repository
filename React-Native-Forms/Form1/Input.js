import { TextInput, StyleSheet, View, Text, Button } from "react-native";

function Input({ label, placeholder, title, onPress }) {
  return (

    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>

  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15
  },
  labelText: {
    fontSize: 15,
    fontWeight: 600
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    width: '58%',
    borderRadius: 10
  }
})
export default Input;