import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import Logo from "@/assets/images/logo.svg";
import { Book, Edit2, LogoutCurve, Scan } from "iconsax-react-native";
import ShelfItem from "@/components/shelfItem/ShelfItem";
import ThemedText from "@/components/ThemedText/ThemedText";
import { Colors } from "@/constants/Colors";

const HomeLibrary = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Logo width={140} height={60} />
        </View>
        <View style={styles.welcome}>
          <ThemedText size={24}>Welcome,</ThemedText>
        </View>
      </View>

      {/* Tools Section */}
      <View style={styles.centeredContainer}>
        <View style={styles.tools}>
          <View style={styles.toolsText}>
            <ThemedText size={25} style="bold">NFC Tools</ThemedText>
          </View>
          <View style={styles.shelfRow}>
            <ShelfItem icon={Scan} text="Scan Shelf" link="/scan" color="#ED812D" variant="Bold"/>
            <ShelfItem icon={Edit2} text="Write Tags" link="/(librarian)/write" color="#CC3A53" variant="Bold"/>
            <ShelfItem icon={Book} text="Library" link="/(librarian)/library" color="#1C30E5" variant="Bold"/>
            <ShelfItem icon={LogoutCurve} text="Logout" color="#348800" variant="Bold"/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
  centeredContainer: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  tools: {
    backgroundColor: Colors.background,
    width: 345,
    height: 353,
    borderRadius: 15,
    padding: 10,
  },
  toolsText: {
    marginBottom: 10,
  },
  shelfRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default HomeLibrary;
