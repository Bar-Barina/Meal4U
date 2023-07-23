import { StatusBar } from "expo-status-bar";
import CategoryIndex from "./views/CategoryIndex";
import MealsIndex from "./views/MealsIndex";
import MealDetails from "./views/MealDetails";
import Favorites from "./views/Favorites"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoryIndex}/>
    <Drawer.Screen name="Favorites"  component={Favorites}/>
  </Drawer.Navigator>
}


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
          <Stack.Screen name="All Categories" component={DrawerNavigator} />


          <Stack.Screen name="Meals List" component={MealsIndex} />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
