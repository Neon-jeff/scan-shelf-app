import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screen1" options={{ headerShown: false }} />
      <Stack.Screen name="screen2" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingLayout;
