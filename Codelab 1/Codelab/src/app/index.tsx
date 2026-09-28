import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="information-circle" size={48} color="#2563eb" />
        <Text style={styles.title}>Hello World</Text>

        <TextInput placeholder="Type here..." style={styles.input} />

        <Pressable style={styles.button}>
          <Ionicons name="hand-left" size={20} color="white" />
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "red",
    marginVertical: 12,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});