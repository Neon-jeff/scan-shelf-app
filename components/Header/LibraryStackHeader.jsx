import { View, Text } from "react-native";
import React from "react";
import ThemedText from "./../ThemedText/ThemedText";
import { ArrowLeft2 } from "iconsax-react-native";

const LibraryStackHeader = ({ title }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={{ position: "absolute" }}>
        <ArrowLeft2 size={20} />
      </View>
      <ThemedText text={title} size={25} style="bold" />
    </View>
  );
};

export default LibraryStackHeader;
