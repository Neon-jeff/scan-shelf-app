import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../../constants/Colors";
import { LibraryContextProvider } from "../../context/LibraryContext";
const LibrarianLayoutRoot = () => {
  return (
    <LibraryContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.white,
          },
        }}
      >
        <Stack.Screen name="write" />
        <Stack.Screen name="writeSuccess" />
        <Stack.Screen name="librarySuccess" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="scanNFCWrite" />
      </Stack>
    </LibraryContextProvider>
  );
};

export default LibrarianLayoutRoot;
