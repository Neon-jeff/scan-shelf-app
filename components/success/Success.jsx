import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, View, Pressable } from "react-native";
import ThemedText from "../ThemedText/ThemedText";
import SuccessImage from "../../assets/images/success.svg";
import { Colors } from "../../constants/Colors";

const Success = ({ header, message }) => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <ThemedText size={24} style="bold">
        {header}
      </ThemedText>

      {/* Success Section */}
      <View style={styles.successContainer}>
        <SuccessImage width={198} height={198} />
        <View style={styles.message}>
          <ThemedText size={18}>{message}</ThemedText>
        </View>

        <Pressable
          onPress={() => router.push("home")}
          style={styles.linkContainer}
        >
          <ThemedText
            color={Colors.primary}
            size={20}
            extras={{ textDecorationLine: "underline" }}
          >
            Back to HomePage
          </ThemedText>
          <View
            style={styles.line}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  successContainer: {
    flex: 0.75,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginTop: 30,
    alignItems: "center",
  },
  linkContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  line: {
    height: 2, 
    backgroundColor: 'black', 
    width: '100%', 
    marginTop: 5,
  },
});

export default Success;
