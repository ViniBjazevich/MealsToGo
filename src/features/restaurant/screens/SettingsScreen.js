import { Button } from "react-native-paper";
import { auth } from "../../../../firebaseConfig";
import { signOut } from "firebase/auth";
import styled from "styled-components/native";

export const SettingsScreen = () => {
  const SettingsContainer = styled.View`
    padding: 10px;
  `;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SettingsContainer>
      <Button mode="contained" onPress={handleSignOut}>
        Sign out
      </Button>
    </SettingsContainer>
  );
};
