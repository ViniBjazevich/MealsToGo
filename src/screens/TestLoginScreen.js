import React, { useState, useContext } from "react";
import { ActivityIndicator, Button, Text, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const WorkingLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../assets/home_bg.jpg"),
  })`
    flex: 1;
    align-items: center;
    justify-content: center;
  `;

  const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  `;

  const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
  `;

  return (
    <AccountBackground>
      <AccountCover />
      <Text>Meals To Go</Text>
      <AccountContainer>
        <TextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {/* {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )} */}
      </AccountContainer>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Back
      </Button>
    </AccountBackground>
  );
};
