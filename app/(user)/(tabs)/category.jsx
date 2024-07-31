import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { Colors } from "../../../constants/Colors";
import BookCard from "../../../components/Card/BookCard";
import RatingModal from "../../../components/Modal/RatingModal";
import Field from "../../../components/Fields/Field";
import { UserContext } from "../../../context/userContext";
import { Redirect } from "expo-router";
import Button from "../../../components/Button/Button";
import { router } from "expo-router";

const Category = () => {
  const { category, message } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchBook, setSearchBook] = useState({
    title: "",
  });

  if (category.length == 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <ThemedText text={`Scan a tag from shelf ${message}`} />
        <Button
          width="80%"
          action={() => {
            router.push("/(user)/(tabs)/scan");
          }}
        />
      </View>
    );
  }
  const [ratings, setRatings] = useState({});
  const books = category["books"].map((item) => ({
    title: item["title"],
    author: item["author"],
    image: "https://cdn-icons-png.freepik.com/512/3488/3488109.png",
    id: item["$id"],
    status: item["available"],
    rating: Math.floor(Math.random() * 3) + 3,
  }));

  const handleStarPress = (index) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [selectedBook.id]:
        prevRatings[selectedBook.id] === index + 1 ? 0 : index + 1,
    }));
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBook(null);
  };

  const filteredData = books?.filter((item) =>
    item?.title?.toLowerCase().includes(searchBook.title?.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ marginTop: 20 }}>
        <ThemedText
          text={category["sectionname"]}
          size={24}
          style="semibold"
          align="left"
          color={Colors.black}
        />
        <View style={styles.searchCont}>
          {/* <InputSearch label={"Search book..."} /> */}
          <Field
            placeholder={"Search book..."}
            onChange={(text) => {
              setSearchBook({ ...searchBook, title: text });
            }}
            value={searchBook}
          />
        </View>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <BookCard book={item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {modalVisible && (
        <RatingModal
          modalVisible={modalVisible}
          closeModal={closeModal}
          selectedBook={selectedBook}
          rating={ratings[selectedBook?.id] || 0}
          onStarPress={handleStarPress}
        />
      )}
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
    paddingTop: StatusBar.currentHeight,
  },
  list: {
    paddingBottom: 20,
  },
  searchCont: {
    marginVertical: 20,
  },
});
