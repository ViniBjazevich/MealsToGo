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

export const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = Boolean(user?.uid);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        dispatch(loginUser(user));
        dispatch(updateUserLoading(false));
        console.log("signed in");
      } else {
        dispatch(logoutUser());
        dispatch(updateUserLoading(false));

        console.log("signed out");
      }
    });

    return unsubscriber;
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
