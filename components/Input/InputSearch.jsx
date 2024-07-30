import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const InputSearch = ({
  label,
  password,
  inputMode = "text",
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View
      style={[
        style.inputContainer,
        {
          borderColor: "#D9D5D4",
        },
      ]}
    >
      <TextInput
        autoCorrect={false}
        inputMode={inputMode}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        editable
        style={style.textInput}
        placeholder={label}
        {...props}
      />
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
  },
  textInput: {
    color: Colors.primary,
    flex: 1,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "regular",
  },
});

export default InputSearch;
