import { FlatList } from "react-native";
import React from "react";
import MealPreview from "./MealPreview";

export default function MealList({ meals }) {
  const renderItem = ({ item }) => <MealPreview title={item.title}  imageUrl={item.imageUrl} complexity={item.complexity} affordability={item.affordability} duration={item.duration}/>;
  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    ></FlatList>
  );
}
