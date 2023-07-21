import { FlatList,StyleSheet } from "react-native";
import React from "react";
import CategoryPreview from "./CategoryPreview";

export default function CategoryList({ categories }) {
    
  const renderItem = ({ item }) => <CategoryPreview title={item.title} color={item.color} />
  return (
    <FlatList style={styles.listContainer}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
    listContainer: {
      marginTop:50,
    },
  });
  