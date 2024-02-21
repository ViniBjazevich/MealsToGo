import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const LandingScreen = ({ navigation }) => {
  const LandingScreenContainer = styled.View`
    flex: 1;
    flex-direction: "column";
    justify-content: center;
    gap: 10px;
    padding: 50px;
  `;

  return (
    <LandingScreenContainer>
      <Button
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("loginScreen")}
      >
        Login
      </Button>
      <Button
        icon="account-outline"
        mode="contained"
        onPress={() => navigation.navigate("")}
      >
        Sign up
      </Button>
    </LandingScreenContainer>
  );
};
