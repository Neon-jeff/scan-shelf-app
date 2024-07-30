import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../../constants/Colors";

const LibrarianLayoutRoot = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Stack.Screen name="library" />
      <Stack.Screen name="write" />
      <Stack.Screen name="writeSuccess" />
      <Stack.Screen name="librarySuccess" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default LibrarianLayoutRoot;
