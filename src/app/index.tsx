import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import DayListItem from "../components/core/DayListItem";
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
  RobotoCondensed_300Light_Italic,
} from "@expo-google-fonts/roboto-condensed";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function App() {
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
  const numbersArray = Array.from({ length: 24 }, (_, index) => index + 1);
  if (!fontError && !fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        data={numbersArray}
        keyExtractor={(item) => item.toFixed()}
        renderItem={({ item }) => <DayListItem item={item} />}
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
