import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DayListItem = ({ item }: { item: number }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: "#9b4521",
    borderRadius: 10,
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily: "RBold",
  },
});
