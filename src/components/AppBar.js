import { Appbar } from "react-native-paper";
import styled from "styled-components/native";
import { Icon } from "react-native-paper";
import { SafeArea } from "./SafeArea";

const AppBar = ({ navigation }) => (
  <SafeArea>
    <Appbar.BackAction
      onPress={() => {
        navigation.navigate("landingScreen");
      }}
    />
  </SafeArea>
);

export default AppBar;
