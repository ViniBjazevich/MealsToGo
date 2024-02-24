import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { LandingScreen } from "../screens/auth/LandingScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
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
