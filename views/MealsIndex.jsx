import { View, Text } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../cmps/Meal/MealList";

export default function MealsIndex() {
  return (
    <View>
      <Text>Meals View</Text>
      <MealList meals={MEALS} />
    </View>
  );
}
