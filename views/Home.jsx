import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Home({navigation}) {

function getStarted() {
navigation.navigate("Categories")
}

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Meal4U</Text>
      <Button title="Get Started!" onPress={getStarted}  android_ripple={{ color: "#CCC7" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    marginTop: "50%",
    backgroundColor: "#f7f7ff",
  },
  homeText: {
    color:"#242526",
    fontSize: 70,
  },
});
