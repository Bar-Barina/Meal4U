import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryPreview from "./CategoryPreview";

export default function CategoryList({ categories, navigation }) {

  function pressHandler() {
   navigation.navigate("Meals List")
  }

  const renderItem = ({ item }) => (
    <CategoryPreview title={item.title} color={item.color} onPress={pressHandler} />
  );
  return (
    <FlatList
      style={styles.listContainer}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {},
});
