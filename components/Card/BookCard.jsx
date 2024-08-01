import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ThemedText from "../ThemedText/ThemedText";
import { Colors } from "../../constants/Colors";

const BookCard = ({ book }) => {
  
  return (
    <View style={styles.card}>
      <Image source={{ uri: book.image }} resizeMode="cover" style={styles.image} />
      <View style={styles.info}>
        <ThemedText
          text={book.title}
          size={16}
          style="medium"
          align="left"
          extras={{
            lineHeight: 24,
          }}
          color={Colors.black}
        />
        <ThemedText text={book.author} size={12} style="medium" align="left" />
        <ThemedText
          text={`⭐ ${book.rating}`}
          size={12}
          style="medium"
          align="left"
        />
      </View>
      <View
        style={{
          paddingVertical: 4,
          paddingHorizontal: 6,
          borderRadius: 10,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          backgroundColor: book.status === "AVAILABLE" ? "#E1F7E3" : "#FC4D40",
        }}
      >
        <ThemedText
          text={book.status}
          size={12}
          style="medium"
          align="left"
          extras={{
            lineHeight: 24,
          }}
          color={book.status === "AVAILABLE" ? "#15711F" : Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E9EAF0",
    alignSelf: "stretch",
  },
  image: {
    width: 50,
    height: 70,
    borderRadius: 5,
    resizeMode: "cover",
  },
  info: {
    marginHorizontal: 20,
    alignContent: "flex-start",
    flexDirection: "column",
    flex: 1,
    gap: 4,
  },

  status: {
    fontSize: 14,
    color: "green",
  },
});

export default BookCard;
