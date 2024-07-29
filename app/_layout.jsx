import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
// import * as NavigationBar from "expo-navigation-bar";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    regular: require("../assets/fonts/Syne-Regular.ttf"),
    medium: require("../assets/fonts/Syne-Medium.ttf"),
    semibold: require("../assets/fonts/Syne-SemiBold.ttf"),
    bold: require("../assets/fonts/Syne-Bold.ttf"),
    extra: require("../assets/fonts/Syne-ExtraBold.ttf"),
  });

  // method to control the navigation button styles on android
  // const setNavigationBarStyles = async () => {
  //   await NavigationBar.setBackgroundColorAsync("white");
  //   await NavigationBar.setButtonStyleAsync("dark");
  // };

  useEffect(() => {
    // set the navigation styles to fit design
    // setNavigationBarStyles();
    if (fontError) throw Error;

    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(librarian)" options={{ headerShown: false }} />
      <Stack.Screen name="(user)" options={{ headerShown: false }} />
    </Stack>
  );
}
