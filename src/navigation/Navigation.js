/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUser,
  logoutUser,
  updateUserLoading,
} from "../../redux/accountSlice";
import { selectUser } from "../../redux/selectors";
import { NavigationIcons } from "./NavigationIcons";
import { auth } from "../../firebaseConfig";
import { AppNavigation } from "./AppNavigator";
import { AuthNavigation } from "./AuthNavigator";
import { View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoadingSpinnerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Navigation = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = Boolean(user?.uid);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        dispatch(loginUser(user));
        dispatch(updateUserLoading(false));
        setInitialLoad(false);
      } else {
        dispatch(logoutUser());
        dispatch(updateUserLoading(false));
        setInitialLoad(false);
      }
    });

    return unsubscriber;
  }, []);

  if (initialLoad) {
    return (
      <LoadingSpinnerContainer>
        <ActivityIndicator size="large" color="#202124" />
      </LoadingSpinnerContainer>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
