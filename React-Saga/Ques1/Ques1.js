import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "./action";
import Item from "./Item";

function Ques1() {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state);

  const handleData = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <View style={styles.container}>
      <Text>Hello Everyone</Text>
      <Button title="GetData" onPress={handleData} />

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {/* Wrap all items in a ScrollView */}
      <ScrollView>
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <Item key={post.id} id={post.id} title={post.title} body={post.body} />
            );
          })
        ) : (
          <Text>No posts available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ques1;
