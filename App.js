import { StatusBar } from "expo-status-bar";
import {
 Button,
} from "react-native";
import CategoryIndex from "./views/CategoryIndex";
import MealsIndex from "./views/MealsIndex";
import MealDetails from "./views/MealDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#5C4033" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#C4A484" },
          }}
        >
          <Stack.Screen name="All Categories" component={CategoryIndex} />
          <Stack.Screen name="Meals List" component={MealsIndex} />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
