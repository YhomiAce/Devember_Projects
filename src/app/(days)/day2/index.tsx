import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DayOne = () => {
  return (
    <View>
      <Text>Day Two detail screen</Text>
      <Link href={"/"}>Go Back</Link>
    </View>
  );
};

export default DayOne;
