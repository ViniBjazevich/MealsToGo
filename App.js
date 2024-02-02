import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurant/screens/RestaurantScreen";

export default function App() {
  return (
    <PaperProvider>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("Meals To Go", () => App);
