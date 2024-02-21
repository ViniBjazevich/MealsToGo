import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

export const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignupScreenContainer = styled.View`
    flex: 1;
    flex-direction: "column";
    justify-content: center;
    gap: 10px;
    padding: 50px;
  `;

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <SignupScreenContainer>
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
      <Button icon="lock-open-outline" mode="contained" onPress={handleSignup}>
        Login
      </Button>
    </SignupScreenContainer>
  );
};
