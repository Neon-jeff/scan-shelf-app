import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { LogoutCurve, Scan } from "iconsax-react-native";
import { router } from "expo-router";

import ThemedText from "../../../components/ThemedText/ThemedText";
import HeaderLogo from "../../../components/Header/HeaderLogo";
import ShelfItem from "../../../components/shelfItem/ShelfItem";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.headerLogo}>
        <HeaderLogo />
      </View>
      <View style={styles.header}>
        <ThemedText size={24}>Welcome,</ThemedText>
      </View>
      {/* Content section */}
      <View style={styles.card}>
        <ThemedText size={20}>NFC Tools</ThemedText>
        <View style={styles.toolsContainer}>
          <TouchableOpacity
            style={styles.tool}
            onPress={() => {
              router.push("/(user)/(tabs)/scan");
            }}
          >
            <View style={styles.iconContainer}>
              <Scan size="32" color="#FF8A65" />
            </View>
            <View style={styles.toolTop}>
              <ThemedText>Scan Shelf</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tool}
            onPress={() => {
              router.push("/(onboarding)/screen1");
            }}
          >
            <View style={styles.iconContainer}>
              <LogoutCurve size={32} color="#348800" style={styles.logout} />
            </View>
            <View style={styles.toolTop}>
              <ThemedText>Logout</ThemedText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerLogo: {
    alignItems: "flex-start",
    marginTop: 12,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    marginTop: 26,
    height: 250,
  },
  iconContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
  },
  toolTop: {
    marginTop: 10,
  },
  toolsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  tool: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
  },
  toolText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logout: {
    fontWeight: "700",
  },
});

export default Home;
