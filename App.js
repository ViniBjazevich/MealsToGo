import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurant/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "./src/features/restaurant/screens/MapScreen";
import { SettingsScreen } from "./src/features/restaurant/screens/SettingsScreen";
import { NavigationIcons } from "./src/components/NavigationIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_700Bold,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: (props) => NavigationIcons({ ...props, route }),
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

AppRegistry.registerComponent("meals-to-go", () => App);
