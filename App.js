import { StatusBar } from "expo-status-bar";
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
            title: "All Categories",
            headerStyle: { backgroundColor: "#5C4033" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#C4A484" },
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={CategoryIndex}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="Meals List"
            component={MealsIndex}
            options={{ title: "Category List" }}
          />
          <Stack.Screen
            name="Meal Details"
            component={MealDetails}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
