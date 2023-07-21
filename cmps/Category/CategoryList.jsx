import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryPreview from "./CategoryPreview";
import { useNavigation } from "@react-navigation/native";

export default function CategoryList({ categories }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CategoryPreview
      title={item.title}
      color={item.color}
      onPress={() => pressHandler(item.id)}
    />
    
  );

  function pressHandler(itemId) {
    navigation.navigate("Meals List", {categoryId: itemId});
  }

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
