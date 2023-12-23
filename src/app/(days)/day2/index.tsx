import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DayTwoDetailScreen = () => {
  return (
    <View>
      <Text>Day Two detail screen</Text>
      <Link href={"/"}>Go Back</Link>
    </View>
  );
};

export default DayTwoDetailScreen;
