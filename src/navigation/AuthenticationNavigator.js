import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { LandingScreen } from "../screens/LandingScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export const AuthenticationNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="landingScreen" component={LandingScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="signUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
