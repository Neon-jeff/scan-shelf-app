import { View, Text, Pressable } from "react-native";
import React from "react";
import ThemedText from "./../ThemedText/ThemedText";
import { ArrowLeft2 } from "iconsax-react-native";
import { router } from "expo-router";

const LibraryStackHeader = ({ title }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <Pressable
        style={{ position: "absolute", left: 0, bottom: "12.5%" }}
        onPress={() => {
          router.back();
        }}
      >
        <ArrowLeft2 size={25} color="black" />
      </Pressable>
      <ThemedText text={title} size={27} style="bold" />
    </View>
  );
};

export default LibraryStackHeader;
