import { View,StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryList from "../cmps/Category/CategoryList";

export default function CategoryIndex() {
  return (
    <View style={styles.container}>
      <CategoryList categories={CATEGORIES} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  