import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderName, HeaderText, ListItem } from "../../../components";
import { router } from "expo-router";
import { fetchCategories } from "../../../appwrite/fetchBookAndCategories";
import { LibraryContext } from "../../../context/LibraryContext";

const Library = () => {
  const { sections, SetSections } = useContext(LibraryContext);
  useEffect(() => {
    Alert.alert("Loading Your Library");
    SectionFetch();
  }, []);
  const SectionFetch = async () => {
    let data = await fetchCategories();
    SetSections(data);
  };

  const [data, setData] = useState([]);

  if (sections.length > 0) {
    sections.forEach;
  }
  const handleDeleteItem = (id) => {
    const updatedData = sections.filter((item) => item["$id"] !== id);
    SetSections(updatedData);
  };

  const handleEditItem = (id) => {
    router.push(`(librarian)/${id}`);
  };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onDelete={handleDeleteItem}
      onEdit={() => {
        handleEditItem(item.id);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderName
        name="Library"
        onPress={() => {
          router.back();
        }}
      />

      <FlatList
        style={styles.categoryList}
        data={sections.map((section) => ({
          id: section["$id"],
          name: section["sectionname"],
        }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              marginBottom: 24,
              marginHorizontal: 20,
            }}
          >
            <HeaderText
              otherStyles={{ fontSize: 20, fontFamily: "semibold" }}
              name="Section Shelves"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    marginTop: 45,
    marginHorizontal: 24,
  },

  shelvesContainer: {
    marginTop: 24,
  },
  categoryList: {
    marginTop: 45,

    alignSelf: "stretch",
  },
});
