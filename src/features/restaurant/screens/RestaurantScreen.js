import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";

const isAndroid = Platform.OS === "android";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <RestaurantCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 10,
    backgroundColor: "lightgrey",
  },
});
