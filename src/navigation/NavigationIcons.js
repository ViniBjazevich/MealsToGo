import Ionicons from "@expo/vector-icons/Ionicons";

export const NavigationIcons = ({ focused, color, size, route }) => {
  let iconName;

  if (route.name === "Restaurants") {
    iconName = "restaurant-outline";
  } else if (route.name === "Map") {
    iconName = "navigate-outline";
  } else {
    iconName = "settings-outline";
  }

  return (
    <Ionicons name={iconName} size={32} color={focused ? "tomato" : "grey"} />
  );
};
