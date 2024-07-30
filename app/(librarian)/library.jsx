import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderName, HeaderText, ListItem } from "../../components";
import { router } from "expo-router";

const Library = () => {
  const [data, setData] = useState([
    { id: "1", name: "Chemistry" },
    { id: "2", name: "Mathematics" },
    { id: "3", name: "Biology" },
    { id: "4", name: "Physics" },
  ]);

  const handleDeleteItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleEditItem = () => {};

  const renderItem = ({ item }) => (
    <ListItem item={item} onDelete={handleDeleteItem} onEdit={handleEditItem} />
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
        data={data}
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
