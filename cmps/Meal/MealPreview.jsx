import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function MealPreview({
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) {
  return (
    <View >
      <Pressable
        style={({ pressed }) => [
          styles.previewContainer,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#CCC7" }}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={[styles.previewTextWrapper]}>
          <Text style={styles.title}>{title}</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
          <Text>{duration} Minutes</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // elevation: 4,
    borderBottomColor:'black',
    borderBottomWidth: 1,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  previewTextWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontWeight:"bold",
    fontSize: 14,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
