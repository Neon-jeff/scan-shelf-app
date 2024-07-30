import { View, Text, Pressable } from "react-native";
import React from "react";
import ThemedText from "./../ThemedText/ThemedText";
import { ArrowLeft2 } from "iconsax-react-native";

const LibraryStackHeader = ({ title }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <Pressable style={{ position: "absolute", left: 0, bottom: "12.5%" }}>
        <ArrowLeft2 size={25} color="black" />
      </Pressable>
      <ThemedText text={title} size={27} style="bold" />
    </View>
  );
};

export default LibraryStackHeader;
