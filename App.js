import {StyleSheet} from "react-native"
import { StatusBar } from "expo-status-bar";
import CategoryIndex from "./views/CategoryIndex";
import MealsIndex from "./views/MealsIndex";
import MealDetails from "./views/MealDetails";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#242526" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#414360" },
        drawerContentStyle: { backgroundColor: "#242526" },
        drawerInactiveTintColor: "#f7f7ff",
        drawerActiveBackgroundColor: "#f7f7ff",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoryIndex}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#242526" },
            headerTintColor: "#f7f7ff",
            contentStyle: { backgroundColor: "#414360" },
          }}
        >
          <Stack.Screen
            name="All Categories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="Meals List" component={MealsIndex} />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})