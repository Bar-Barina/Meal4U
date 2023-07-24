import { Text } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../cmps/Meal/MealList";
import { MEALS } from "../data/dummy-data";

export default function Favorites() {
  const favoriteMealsIds = useSelector((state) => state.favorite.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (!favoriteMeals || favoriteMeals.length === 0)
    return <Text>No favorite meals for now...</Text>;

  return <MealList meals={favoriteMeals} />;
}
