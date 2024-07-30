import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft2 } from "iconsax-react-native";
import HeaderText from "../../ThemedText/HeaderText/HeaderText";

const HeaderName = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <ArrowLeft2 size="20" color="#776D6A" />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <HeaderText
            otherStyles={{ fontSize: 24, fontFamily: "bold" }}
            name={name}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderName;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  headerContent: {
    alignItems: "center",
    marginHorizontal: 24,
  },
  backButton: {
    width: 30,
    height: 30,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  nameContainer: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontFamily: "bold",
    color: "#120903",
    lineHeight: 24,
  },
});
