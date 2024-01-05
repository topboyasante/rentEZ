import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./src/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    // Hides the native splash screen immediately.
    SplashScreen.hideAsync();
  }

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar />
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
