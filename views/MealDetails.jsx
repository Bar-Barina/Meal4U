import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import IconButton from "../cmps/IconButton";
import React, { useLayoutEffect } from "react";

export default function MealDetails({ route, navigation }) {
  const { meal } = route.params;
  const getStatusMessage = (isTrue, trueMessage, falseMessage) =>
    isTrue ? trueMessage : falseMessage;

  function headerButtonPressed() {
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={"star"} color={"white"} onPress={headerButtonPressed} />;
      },
    });
  }, [navigation, headerButtonPressed]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{meal.title}</Text>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text>{meal.complexity.toUpperCase()}</Text>
          <Text>{meal.affordability.toUpperCase()}</Text>
          <Text>{meal.duration}M</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Ingredients</Text>
          {meal.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.listItem}>
              {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Steps</Text>
          {meal.steps.map((step, index) => (
            <Text key={index} style={styles.listItem}>
              {`${step}`}
            </Text>
          ))}
        </View>
        <View style={styles.details}>
          <Text style={styles.status}>
            {getStatusMessage(
              meal.isGlutenFree,
              "Gluten Free!",
              "Isn't Gluten Free"
            )}
          </Text>
          <Text style={styles.status}>
            {getStatusMessage(meal.isVegan, "Vegan", "Non-Vegan")}
          </Text>
          <Text style={styles.status}>
            {getStatusMessage(
              meal.isVegetarian,
              "Vegetarian",
              "Non-Vegetarian"
            )}
          </Text>
          <Text style={styles.status}>
            {getStatusMessage(
              meal.isLactoseFree,
              "Lactose-Free",
              "Contains Lactose"
            )}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 5,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  listItem: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 3,
    marginVertical: 5,
    marginHorizontal: 40,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  status: {
    fontSize: 16,
    marginBottom: 5,
  },
  details: {
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
