import { StyleSheet, View, Text } from "react-native";

function Item({ id, title, body }) {
  return (
    <View style={styles.view}>
      <Text>The id is {id}</Text>
      <Text>The title is {title}</Text>
      <Text>The body is {body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    backgroundColor: 'lightgreen',
    margin: 6,
  },
});

export default Item;
