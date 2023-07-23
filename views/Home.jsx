import { View, Text, StyleSheet, Button, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  function getStarted() {
    navigation.navigate("Categories");
  }

  return (
    <LinearGradient
      colors={["#414360", "#f7f7ff", "#aa4203"]}
      style={styles.homeContainer}
    >
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />
      <Button
        title="Get Started!"
        onPress={getStarted}
        android_ripple={{ color: "#CCC7" }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  image: {
    margin: 50,
    width: 230,
    height: 260,
  },
});
