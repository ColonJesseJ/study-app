import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>More screen</Text>
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
  });
