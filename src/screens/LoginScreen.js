import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("gemmaielsadsad@gmail.com");
  const [password, setPassword] = useState("iwanttosuckvinisdick");

  const LoginScreenContainer = styled.View`
    flex: 1;
    flex-direction: "column";
    justify-content: center;
    gap: 10px;
    padding: 50px;
  `;

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
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button icon="lock-open-outline" mode="contained" onPress={handleSignIn}>
        Login
      </Button>
    </LoginScreenContainer>
  );
};
