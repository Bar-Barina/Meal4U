import { View } from "react-native";
import React from "react";
import CategoryList from "../cmps/CategoryList";

export default function CategoryIndex({categories}) {
  return (
    <View>
      <CategoryList categories={categories}/>
    </View>
  );
}
