import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "./TabBar";

//Pages Imports
import HomeScreen from "../screens/home";
import SearchScreen from "../screens/search";
import OrdersScreen from "../screens/orders";
import UserScreen from "../screens/user";

const Tab = createBottomTabNavigator();

export default function TabStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="orders" component={OrdersScreen} />
      <Tab.Screen name="user" component={UserScreen} />
    </Tab.Navigator>
  );
}