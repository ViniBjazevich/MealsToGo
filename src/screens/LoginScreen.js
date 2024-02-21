import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextInput } from "react-native-paper";
import { auth } from "../../firebaseConfig";
import styled from "styled-components/native";

const LoginScreenContainer = styled.View`
  flex: 1;
  flex-direction: "column";
  justify-content: center;
  gap: 10px;
  padding: 50px;
`;

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("user not signed in: ", errorCode, errorMessage);
    }
  };

  return (
    <LoginScreenContainer>
      <TextInput
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        label="Password"
        value={password}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(e) => setPassword(e)}
      />
      <Button icon="lock-open-outline" mode="contained" onPress={handleSignIn}>
        Login
      </Button>
    </LoginScreenContainer>
  );
};
