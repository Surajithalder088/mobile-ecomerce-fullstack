import { StyleSheet, Text, View } from "react-native";

export default function cartPage() {
  return (
    <View style={styles.container}>
      <View >
        <Text >Hello World</Text>
        <Text >surajit halder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor:"#ddd"
  },

});
