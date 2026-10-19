import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/usecontext_example">Buka Codelab 1 (Dark Mode)</Link>
    </View>
  );
}
