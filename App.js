import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "./src/theme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Navigation } from "./src/navigation/Navigation";
import "react-native-gesture-handler";

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PaperProvider>
            <Navigation />
          </PaperProvider>
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </>
  );
}

AppRegistry.registerComponent("meals-to-go", () => App);
