import { Stack } from "expo-router";
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
  RobotoCondensed_300Light_Italic,
} from "@expo-google-fonts/roboto-condensed";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    RRegular: RobotoCondensed_400Regular,
    RBold: RobotoCondensed_700Bold,
    RItalic: RobotoCondensed_300Light_Italic,
  });
  useEffect(() => {
    if (fontError || fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontError && !fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f9ede3",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Devember Projects", headerStyle: {} }}
      />
    </Stack>
  );
}
