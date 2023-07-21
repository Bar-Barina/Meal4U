import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoryIndex from "./views/CategoryIndex";
import { CATEGORIES } from "./data/dummy-data";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryIndex categories={CATEGORIES} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
