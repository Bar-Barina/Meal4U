import { View, Text } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../cmps/Meal/MealList";

export default function MealsIndex({ route }) {
  const catId = route.params.categoryId;

  const mealsToRender = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return (
    <View>
      <Text>Meals View {catId}</Text>
      <MealList meals={mealsToRender} />
    </View>
  );
}
