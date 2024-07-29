import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { Colors } from "../../constants/Colors";

// type prop is either filled or outlines
const Button = ({
  label = "Button",
  type = "filled",
  action = () => {},
  disabled = false,
  children,
}) => {
  return (
    <Pressable
      onPress={action}
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? Colors.disabled
            : type == "outline"
            ? Colors.white
            : Colors.primary,
          borderWidth: type == "outline" ? 1 : 0,
          borderColor: type == "outline" ? Colors.black : "transparent",
        },
      ]}
    >
      <ThemedText
        text={label}
        size={20}
        style="medium"
        color={type == "outline" ? Colors.black : Colors.white}
      />
      {children}
    </Pressable>
  );
};

let styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 6,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
});

export default Button;
