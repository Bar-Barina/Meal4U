import { FlatList } from "react-native";
import MealPreview from "./MealPreview";
import { useNavigation } from "@react-navigation/native";

export default function MealList({ meals }) {
  // const payload = {

  // }

  const renderItem = ({ item }) => {
    const payload = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };

    return <MealPreview onPress={() => pressHandler(item.id)} payload={payload} />;
  };

  const navigation = useNavigation();

  function pressHandler(itemId) {
    navigation.navigate("Meal Details", { mealId: itemId });
  }

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    ></FlatList>
  );
}
