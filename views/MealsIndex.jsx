import React, {useLayoutEffect} from "react";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealList from "../cmps/Meal/MealList";
import { LinearGradient } from "expo-linear-gradient";

export default function MealsIndex({ route,navigation }) {
  const catId = route.params.categoryId;

  const mealsToRender = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(category => category.id === catId).title
    navigation.setOptions({
      title: catTitle
    })
  },[catId,navigation])
 

  return (
    <LinearGradient colors={["#414360", "#f7f7ff"]}  style={{flex:1}}>
      <MealList meals={mealsToRender} />
    </LinearGradient>
  );
}
