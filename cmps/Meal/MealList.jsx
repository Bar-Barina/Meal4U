import { FlatList } from "react-native";
import MealPreview from "./MealPreview";
import { useNavigation } from "@react-navigation/native";

export default function MealList({ meals }) {
  const renderItem = ({ item }) => {
    const payload = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };

    return <MealPreview onPress={() => pressHandler(item)} payload={payload} />;
  };

  const navigation = useNavigation();

  function pressHandler(item) {
    navigation.navigate("Meal Details", { meal: item });
  }

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    ></FlatList>
  );
}
