import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function MealDetails({ route }) {
  const { meal } = route.params;
  const getStatusMessage = (isTrue, trueMessage, falseMessage) =>
    isTrue ? trueMessage : falseMessage;

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
              {`${index + 1}. ${step}`}
            </Text>
          ))}
        </View>

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
          {getStatusMessage(meal.isVegetarian, "Vegetarian", "Non-Vegetarian")}
        </Text>
        <Text style={styles.status}>
          {getStatusMessage(
            meal.isLactoseFree,
            "Lactose-Free",
            "Contains Lactose"
          )}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    height: 200,
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 3,
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
