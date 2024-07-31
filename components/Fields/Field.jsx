import { View, Text, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const Field = ({ placeholder, setState, onChange, value, editable = true }) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: Colors.cardOutline,
        borderRadius: 15,
        padding: 9,
        fontFamily: "medium",
        fontSize: 18,
        paddingHorizontal: 20,
      }}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.nativeEvent.text);
      }}
      cursorColor={Colors.gray}
      value={value}
      editable={editable}
    />
  );
};

export default Field;
