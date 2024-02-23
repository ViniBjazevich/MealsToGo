import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  ActivityIndicator,
  Button,
  HelperText,
  TextInput,
} from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components/native";
import AppBar from "../components/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { selectUserLoadingStatus } from "../../redux/selectors";
import { updateUserLoading } from "../../redux/accountSlice";

const SignupScreenContainer = styled.View`
  flex: 1;
  flex-direction: "column";
  justify-content: center;
  gap: 10px;
  padding: 50px;
`;

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userIsLoading = useSelector(selectUserLoadingStatus);
  const dispatch = useDispatch();

  let invalidErrorMessage = "";

  const emailHasErrors = () => {
    if (email.length === 0) return false;
    if (!email.includes("@")) {
      invalidErrorMessage = "Email address must include @.\n";
      return true;
    }
  };

  const passwordHasErrors = () => {
    if (password.length === 0) return false;
    const numberCheck = /(?=.*[0-9])/;
    let error = false;

    if (password.length < 8) {
      error = true;
      invalidErrorMessage += "Must have a length of 8.\n";
    }

    if (!numberCheck.test(password)) {
      error = true;
      invalidErrorMessage += "Must include a number.\n";
    }

    if (password !== confirmPassword) {
      error = true;
      invalidErrorMessage += "Passwords must match.";
    }

    return error;
  };

  const handleSignup = async () => {
    try {
      dispatch(updateUserLoading(true));
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      dispatch(updateUserLoading(false));
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error creating user: ", errorCode, errorMessage);
    }
  };

  const displayErrorMessage = Boolean(emailHasErrors() || passwordHasErrors());
  const enableSubmit =
    !displayErrorMessage &&
    Boolean(email.length) &&
    Boolean(password.length) &&
    Boolean(confirmPassword.length);

  return (
    <>
      <AppBar navigation={navigation} />
      <SignupScreenContainer>
        <TextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <TextInput
            label="Confirm password"
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <HelperText type="error" visible={displayErrorMessage}>
            {invalidErrorMessage}
          </HelperText>
        </View>
        <Button
          mode="contained"
          icon="send-outline"
          loading={userIsLoading}
          onPress={handleSignup}
          disabled={!enableSubmit}
        >
          Signup
        </Button>
      </SignupScreenContainer>
    </>
  );
};
