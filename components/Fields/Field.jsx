import { View, Text, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const Field = ({ placeholder, setState }) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: Colors.cardOutline,
        borderRadius: 10,
      }}
    />
  );
};

export default Field;
