import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import DayListItem from "../components/core/DayListItem";


export default function App() {
    const numbersArray = Array.from({ length: 24 }, (_, index) => index + 1);
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
