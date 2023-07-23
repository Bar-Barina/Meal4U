import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({navigation}) {

function getStarted() {
navigation.navigate("Categories")
}

  return (
    <LinearGradient colors={["#f7f7ff", "#414360"]}  style={styles.homeContainer}>
      <Text style={styles.homeText}>Meal4U</Text>
      <Button title="Get Started!" onPress={getStarted}  android_ripple={{ color: "#CCC7" }} />
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  homeText: {
    color:"#242526",
    fontSize: 90,
  },
});
