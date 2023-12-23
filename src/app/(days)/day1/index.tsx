import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayOneDetailScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day One" }} />
      <Text style={{ fontSize: 30, fontFamily: "RBold" }}>
        DayOne detail screen
      </Text>
      <Link href={"/"}>Go Back</Link>
    </View>
  );
};

export default DayOneDetailScreen;
