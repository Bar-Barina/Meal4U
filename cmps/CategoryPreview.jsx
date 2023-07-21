import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function CategoryPreview({ title, color }) {
  return (
    <View>
      <Pressable style={[{ backgroundColor: color }, styles.previewContainer]}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    padding: 10,
    width: 100,
  },
});
