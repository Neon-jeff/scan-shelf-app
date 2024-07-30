import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ThemedText from "@/components/ThemedText/ThemedText";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button/Button";
import { router } from "expo-router";
import HeaderLogo from "../../components/Header/HeaderLogo";
import ReaderIcon from "../../assets/images/reader.svg";
import LibrarianIcon from "../../assets/images/librarian.svg";

const { width, height } = Dimensions.get("screen");

const OnboardingScreenTwo = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const roles = [
    {
      id: 1,
      name: "Reader",
      image: <ReaderIcon width={90} height={90} />, // Use SVG component
    },
    {
      id: 2,
      name: "Librarian",
      image: <LibrarianIcon width={90} height={90} />, // Use SVG component
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <HeaderLogo />

      <View style={[styles.image]}>
        <ThemedText
          text={"Get started as"}
          size={24}
          style="medium"
          align="center"
          extras={{
            style: {
              lineHeight: "normal",
            },
          }}
          color={Colors.black}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.labelContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.labelCont,
                selectedRole === role.name && styles.activeBorder,
              ]}
              onPress={() => handleSelectRole(role.name)}
            >
              <View style={styles.labelBox}>{role.image}</View>
              <ThemedText
                text={role.name}
                size={16}
                style="semibold"
                extras={{
                  style: {
                    lineHeight: "normal",
                  },
                }}
                color={Colors.black}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          label="Proceed"
          disabled={!selectedRole}
          action={() => {
            router.push("/(user)/(tabs)");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreenTwo;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 0.3,
    width: "100%",
    justifyContent: "center",
  },
  content: {
    flex: 0.6,
    gap: 16,
    paddingTop: 20,
    paddingHorizontal: 30,
    alignSelf: "stretch",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelCont: {
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: "center",
    gap: 32,
    alignSelf: "stretch",
  },
  labelBox: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    borderRadius: 90,
  },
  activeBorder: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
