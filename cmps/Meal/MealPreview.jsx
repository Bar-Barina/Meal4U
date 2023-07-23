import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import React from "react";

export default function MealPreview({ payload, onPress }) {
  const { title, imageUrl, complexity, affordability, duration } = payload;

  const getAffordabilityColor = () => {
    if (affordability === "affordable") {
      return "#228768";
    } else if (affordability === "pricey") {
      return "#ec233c";
    } else if (affordability === "luxurious") {
      return "#cfa013";
    }
    return "black"; // Default color
  };

  return (
    <View style={styles.previewContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#CCC7" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{complexity.toUpperCase()}</Text>
          <Text style={{ color: getAffordabilityColor() }}>{affordability.toUpperCase()}</Text>
          <Text>{duration}M⏱️</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  details: {
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
