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
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>Library</Text>
      <Button
        label="See Success Page"
        action={() => {
          router.push('/(librarian)/librarySuccess',
          );
        }}
      />
    </View>
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
