import { Pressable, StyleSheet, Text } from "react-native"

function Button({ label, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    borderRadius: 18,
    padding: 8,
    width: '30%',
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
})
export default Button