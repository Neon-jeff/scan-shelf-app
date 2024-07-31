import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderText = ({ otherStyles, name }) => {
  return (
    <View>
      <Text style={[styles.headerText, otherStyles]}>{name}</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    color: "#120903",
  },
});
