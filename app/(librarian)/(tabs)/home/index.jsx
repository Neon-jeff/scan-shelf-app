import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import HeaderLogo from "../../../../components/Header/HeaderLogo";
import { Book, Edit2, LogoutCurve, Scan } from "iconsax-react-native";
import ShelfItem from "@/components/shelfItem/ShelfItem";
import ThemedText from "@/components/ThemedText/ThemedText";
import { Colors } from "@/constants/Colors";

const HomeLibrary = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerLogo}>
        <HeaderLogo />
      </View>
      <View style={styles.header}>
        <ThemedText size={24}>Welcome,</ThemedText>
      </View>

      {/* Tools Section */}
      <View style={styles.centeredContainer}>
        <View style={styles.tools}>
          <View style={styles.toolsText}>
            <ThemedText size={25} style="bold">NFC Tools</ThemedText>
          </View>
          <View style={styles.shelfRow}>
            <ShelfItem icon={Scan} text="Scan Shelf" link="/scan" color={Colors.orangeIcon} variant="Bold"/>
            <ShelfItem icon={Edit2} text="Write Tags" link="/(librarian)/write" color={Colors.primary} variant="Bold"/>
            <ShelfItem icon={Book} text="Library" link="/(librarian)/library" color={Colors.purpleIcon} variant="Bold"/>
            <ShelfItem icon={LogoutCurve} text="Logout" color={Colors.greenIcon} variant="Bold"/>
          </View>
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
