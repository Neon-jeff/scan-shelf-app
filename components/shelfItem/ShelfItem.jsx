import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors";
import ThemeText from "../ThemedText/ThemedText";

const ShelfItem = ({ icon: Icon, text, link, color, variant }) => {
  const router = useRouter();

  return (
    <Pressable 
      style={styles.link} 
      onPress={() => {
        if (link) {
          router.push(link);
        }
      }}
    >
      <View style={styles.shelfContainer}>
        <View style={styles.iconBg}>
          <Icon size="32" color={color} variant={variant}/>
        </View>
        <View style={styles.scanShelf}>
        <ThemeText size={18} style="bold">{text}</ThemeText>
        </View>     
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  link: {
    width: 137,
    height: 124,
    marginBottom: 10,
  },
  shelfContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: 15,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanShelf: {
    marginTop: 10,
  },
  iconBg: {
    backgroundColor: Colors.background,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default ShelfItem;
