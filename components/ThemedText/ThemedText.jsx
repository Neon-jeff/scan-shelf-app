import { View, Text } from "react-native";
import React from "react";
import { Colors, colors } from "../../constants/Colors";

// style prop can be either regular, medium, semibold,bold, extra
// the prop specifies the font weight
const ThemedText = ({
  text = "",
  style = "medium",
  size = 18,
  color = Colors.black,
  align = "start",
  extras = {},
  children,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: style,
          fontSize: size,
          color: color,
          textAlign: align,
          ...extras,
        }}
      >
        {text}
        {children}
      </Text>
    </View>
  );
};

export default ThemedText;
