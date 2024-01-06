import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabStackNavigator from "./TabStackNavigator";
import RideDetails from "../screens/ride-details";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" component={TabStackNavigator}/>
      <Stack.Screen name="ride_details" component={RideDetails}/>
    </Stack.Navigator>
  );
}