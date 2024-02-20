/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/accountSlice";
import { selectUser } from "../../redux/selectors";
import { RestaurantScreen } from "../features/restaurant/screens/RestaurantScreen";
import { MapScreen } from "../features/restaurant/screens/MapScreen";
import { SettingsScreen } from "../features/restaurant/screens/SettingsScreen";
import { NavigationIcons } from "./NavigationIcons";
import { auth } from "../../firebaseConfig";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../features/restaurant/screens/LoginScreen";
import { LandingScreen } from "../features/restaurant/screens/LandingScreen";
import { SignUpScreen } from "../features/restaurant/screens/SignUpScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = Boolean(user?.uid);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        dispatch(loginUser(user));
        console.log("signed in");
      } else {
        dispatch(logoutUser());
        console.log("signed out");
      }
    });

    return unsubscriber;
  }, []);

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="landingScreen" component={LandingScreen} />
          <Stack.Screen name="loginScreen" component={LoginScreen} />
          <Stack.Screen name="signUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: (props) => NavigationIcons({ ...props, route }),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
