import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextInput } from "react-native-paper";
import { auth } from "../../../firebaseConfig";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLoadingStatus } from "../../../redux/selectors";
import { updateUserLoading } from "../../../redux/accountSlice";

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
  const dispatch = useDispatch();
  const userIsLoading = useSelector(selectUserLoadingStatus);
  const disableLoginButton = !email.length || !password.length;

  const handleSignIn = async () => {
    try {
      dispatch(updateUserLoading(true));
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      dispatch(updateUserLoading(false));
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("user not signed in: ", errorCode, errorMessage);
    }
  };

  return (
    <>
      <AppBar navigation={navigation} />
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
        <Button
          icon="lock-open-outline"
          mode="contained"
          loading={userIsLoading}
          disabled={disableLoginButton}
          onPress={handleSignIn}
        >
          Login
        </Button>
      </LoginScreenContainer>
    </>
  );
};
