import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconButton from "../cmps/IconButton";
import React, { useLayoutEffect,useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoriteSlice";


export default function MealDetails({ route, navigation }) {
  const { meal } = route.params;

  const favoriteMealsIds = useSelector((state) => state.favorite.ids);
  const isMealFavorite = favoriteMealsIds.includes(meal.id);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(isMealFavorite);

  const getStatusMessage = (isTrue, trueMessage, falseMessage) =>
    isTrue ? trueMessage : falseMessage;

  const getAffordabilityColor = () => {
    if (meal.affordability === "affordable") {
      return "#228768";
    } else if (meal.affordability === "pricey") {
      return "#ec233c";
    } else if (meal.affordability === "luxurious") {
      return "#cfa013";
    }
    return "black";
  };

  function changeFavStatus() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    if (isMealFavorite) {
      dispatch(removeFavorite({ id: meal.id }));
    } else {
      dispatch(addFavorite({ id: meal.id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={changeFavStatus}
          />
        );
      },
    });
  }, [navigation, isFavorite]);

  return (
    <>
      <LinearGradient colors={["#414360", "#f7f7ff"]} style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>{meal.title}</Text>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.mainDetail}>
                {meal.complexity.toUpperCase()}
              </Text>
              <Text style={{ color: getAffordabilityColor() }}>
                {meal.affordability.toUpperCase()}
              </Text>
              <Text style={styles.mainDetail}>{meal.duration}M⏱️</Text>
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Ingredients 🧾</Text>
              {meal.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.listItem}>
                  {ingredient}
                </Text>
              ))}
            </View>

            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Steps ✏️</Text>
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
                  "Gluten Free",
                  "Contains Gluten"
                )}
              </Text>
              <Text style={styles.status}>
                {getStatusMessage(meal.isVegan, "Vegan", "Non-Vegan")}
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
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "#f7f7ff",
  },
  image: {
    height: 300,
    width: "100%",
  },
  listContainer: {
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 18,
    color: "#f7f7ff",
    fontWeight: "bold",
    marginBottom: 5,
    padding: 5,
    textAlign: "center",
  },
  listItem: {
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: 8,
    paddingLeft: 10,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 25,
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
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainDetail: {
    fontSize: 12,
  },
});
