import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Study-app beginning</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: "#fff",
  },
});
