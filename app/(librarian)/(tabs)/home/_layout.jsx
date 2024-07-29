import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../../../../constants/Colors";

const LibrarianStackLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false,
      contentStyle:{
        backgroundColor:Colors.background
      }
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default LibrarianStackLayout;
