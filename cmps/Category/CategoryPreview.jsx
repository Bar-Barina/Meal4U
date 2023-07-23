import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

export default function CategoryPreview({ title, onPress }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.previewContainer,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#CCC7" }}
        onPress={onPress}
      >
        <View style={[styles.previewTextWrapper, { backgroundColor: "#585b82" }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    width: 150,
    height: 110,
    margin: 15,
    borderRadius: 8,
    elevation: 4,
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
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color:"#f7f7ff",
    backgroundColor:"#242526",
    padding:7,
    width:"100%"
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
