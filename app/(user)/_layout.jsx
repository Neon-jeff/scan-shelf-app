import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { UserContextProvider } from "../../context/userContext";

const UserRootLayout = () => {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
};

export default UserRootLayout;
