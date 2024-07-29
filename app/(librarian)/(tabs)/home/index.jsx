import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import Logo from "../../../../assets/images/logo.svg";
import { Edit2, LogoutCurve, Scan } from "iconsax-react-native";
import { Link } from "expo-router";

const HomeLibrary = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Logo width={140} height={60} />
        </View>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome,</Text>
        </View>
      </View>

      {/* Tools Section */}
      <View style={styles.centeredContainer}>
      <View style={styles.tools}>
        <Text style={styles.toolsText}>NFC Tools</Text>
        <View style={styles.shelfRow}>
          <View style={styles.shelfContainer}>
            <View style={styles.iconBg}>
              <Link href="/scan">
              <Scan size="32" color="#ED812D" />
              </Link>
            </View>
            <Text style={styles.scanShelf}>Scan Shelf</Text>
          </View>
          <View style={styles.shelfContainer}>
            <View style={styles.iconBg}>
              <Link href="/(librarian)/write">
              <Edit2 size="32" color="#CC3A53" /> 
              </Link>
            </View>
            <Text style={styles.scanShelf}>Write Tags</Text>
          </View>
          <View style={styles.shelfContainer}>
            <View style={styles.iconBg}>
              <Link href="/(librarian)/library">
              <Scan size="32" color="#1C30E5" />
              </Link> 
            </View>
            <Text style={styles.scanShelf}>Library</Text>
          </View>
          <View style={styles.shelfContainer}>
            <View style={styles.iconBg}>
            <LogoutCurve size="32" color="#348800" />
            </View>
            <Text style={styles.scanShelf}>Logout</Text>
          </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "flex-start",
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  welcome: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
  },
  centeredContainer:{
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  tools: {
    backgroundColor: "#F8F7F7",
    width: 345,
    height: 353,
    borderRadius: 15,
    padding: 10,
  },
  toolsText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  shelfRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  shelfContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 15,
    width: 137,
    height: 124,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  scanShelf: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconBg:{
    backgroundColor: "#F8F7F7",
    height:52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
});

export default HomeLibrary;
