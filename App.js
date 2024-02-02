import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Open up App.js to start working app!</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    backgroundColor: "red",
  },
  header: {
    height: 123,
    backgroundColor: "green",
  },
});
