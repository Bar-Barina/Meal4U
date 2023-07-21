import { View,StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryList from "../cmps/Category/CategoryList";

export default function CategoryIndex({navigation}) {
  return (
    <View style={styles.container}>
      <CategoryList categories={CATEGORIES} navigation={navigation}/>
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
  