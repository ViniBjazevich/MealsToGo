import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIcons } from "./NavigationIcons";
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { MapScreen } from "../screens/MapScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { updateLocation } from "../../redux/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import { selectLocation } from "../../redux/selectors";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(updateLocation(location));
    })();
  }, []);

  return (
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
  );
};
