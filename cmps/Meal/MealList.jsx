import { FlatList } from "react-native";
import React from "react";
import MealPreview from "./MealPreview";

export default function MealList({ meals }) {
  const renderItem = ({ item }) => <MealPreview />;
  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    ></FlatList>
  );
}
