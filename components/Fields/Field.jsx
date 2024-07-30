import { View, Text, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const Field = ({ placeholder, setState, onChange }) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: Colors.cardOutline,
        borderRadius: 15,
        padding: 12,
        fontFamily: "medium",
        fontSize: 20,
        paddingHorizontal: 20,
      }}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.nativeEvent.text);
      }}
      cursorColor={Colors.gray}
    />
  );
};

export default Field;
