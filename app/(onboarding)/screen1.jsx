import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText/ThemedText";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button/Button";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen");
const OnboardingScreenOne = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Image
        source={require("../../assets/images/reader.png")}
        resizeMode="cover"
        style={[styles.image]}
      />

      <View style={styles.content}>
        <ThemedText
          text={"Welcome to ScanShelf"}
          size={28}
          style="bold"
          align="center"
          extras={{
            style: {
              lineHeight: "normal",
            },
          }}
          color={Colors.black}
        />
        <ThemedText
          text={"Discover, Scan, and Explore Your Library with Ease."}
          size={18}
          style="medium"
          align="center"
          color={Colors.black}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          label="Get Started"
          action={() => {
            router.push("/(onboarding)/screen2");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreenOne;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 0.6,
    width: "100%",
  },
  content: {
    flex: 0.3,
    // justifyContent: "center",
    gap: 16,
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignSelf: "stretch",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
