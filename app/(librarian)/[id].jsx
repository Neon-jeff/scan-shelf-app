import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LibraryStackHeader from "../../components/Header/LibraryStackHeader";
import ThemedText from "../../components/ThemedText/ThemedText";
import Field from "../../components/Fields/Field";
import { Colors } from "../../constants/Colors";
import Button from "./../../components/Button/Button";
import { ScrollView } from "react-native";
import { createCategoryAndBooks } from "../../appwrite/createSectionAndBooks";
import {
  ArrowRotateRight,
  Refresh2,
  Image,
  Calendar,
  CloseCircle,
  Trash,
} from "iconsax-react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import DatePickerModal from "../../components/Modals/DatePickerModal";
import { LibraryContext } from "../../context/LibraryContext";
import { useContext } from "react";

const SectionDetails = () => {
  // local search params
  const { id } = useLocalSearchParams();
  const { newId, setNewId, sections } = useContext(LibraryContext);
  const router = useRouter();
  const [sectionName, setSectionName] = useState(null);
  const [uploadedBooks, setUploadedBooks] = useState([]);
  const [currentAddedBook, setCurrentAddedBook] = useState({
    rating: 0,
    available: true,
    raters: 0,
  });
  const [imageLoading, setImageLoading] = useState(null);
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowdatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [showform, setShowForm] = useState(false);
  const section = sections.find((item) => item["$id"] == id);
 
  // upload image
  const uploadDoc = async () => {
    setImageLoading("started");
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpg", "image/jpeg"],
    });
    if (!result.canceled) {
      setImageLoading("completed");
      setImage(result.assets[0]);
      setCurrentAddedBook({
        ...currentAddedBook,
        thumbnail: result.assets[0],
      });
    } else {
      setImageLoading(null);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 25, gap: 40 }}>
      <LibraryStackHeader title={"Library"} />
      {showDatePicker && (
        <DatePickerModal
          setDate={setDate}
          setShowdatePicker={setShowdatePicker}
          setCurrentAddedBook={setCurrentAddedBook}
        />
      )}
      <ScrollView
        contentContainerStyle={{ gap: 25 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 15 }}>
          <ThemedText text="Section Name" size={22} style="medium" />
          <Field
            placeholder={"Section Name"}
            onChange={(text) => {
              setSectionName(text);
            }}
            value={section["sectionname"]}
          />
        </View>

        {/* Upladed Book List */}
        <View style={{ gap: 20 }}>
          <ThemedText text="Book List" size={27} style="semibold" />
          {/* Existing books */}
          <View style={{ gap: 10 }}>
            {section["books"].map((item) => (
              <View
                key={item.title}
                style={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: Colors.cardOutline,
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ThemedText text={item.title} size={20} />
                <Pressable>
                  <Trash size={20} color={Colors.gray} />
                </Pressable>
              </View>
            ))}
          </View>
          {uploadedBooks.length > 0 && (
            <View style={{ gap: 10 }}>
              {uploadedBooks.map((item) => (
                <View
                  key={item.title}
                  style={{
                    padding: 12,
                    borderWidth: 1,
                    borderColor: Colors.cardOutline,
                    borderRadius: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ThemedText text={item.title} size={20} />
                  <Pressable
                    onPress={() => {
                      setUploadedBooks(
                        uploadedBooks.filter((book) => book.title != item.title)
                      );
                    }}
                  >
                    <CloseCircle size={20} color={Colors.gray} />
                  </Pressable>
                </View>
              ))}
            </View>
          )}
        </View>
        {/* book list form  */}
        {showform && (
          <View style={{ gap: 15 }}>
            {showform && (
              <ThemedText text="Add New Book" size={27} style="semibold" />
            )}
            <View style={{ gap: 15 }}>
              <Field
                placeholder={"Book Title"}
                onChange={(text) => {
                  setCurrentAddedBook({ ...currentAddedBook, title: text });
                }}
                value={currentAddedBook.title}
              />
              <Field
                placeholder={"Author"}
                onChange={(text) => {
                  setCurrentAddedBook({ ...currentAddedBook, author: text });
                }}
                value={currentAddedBook.author}
              />
              <View>
                <Field
                  placeholder={"Publication Year"}
                  value={date}
                  editable={false}
                />
                <Pressable
                  style={{
                    position: "absolute",
                    right: 20,
                    height: "100%",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setShowdatePicker(true);
                  }}
                >
                  <Calendar size={25} color="gray" />
                </Pressable>
              </View>
              <Field
                placeholder={"Number of copies"}
                onChange={(text) => {
                  setCurrentAddedBook({ ...currentAddedBook, copies: text });
                }}
                value={currentAddedBook.copies}
              />
              {/* upload image section */}
              <Pressable
                style={{
                  padding: 15,
                  borderWidth: 2,
                  borderColor: Colors.cardOutline,
                  borderRadius: 10,
                  borderStyle: "dashed",
                  gap: 15,
                  alignItems: "center",
                }}
                onPress={uploadDoc}
              >
                <ThemedText
                  text="Upload your images"
                  size={22}
                  style="medium"
                />
                <ThemedText text="in JPEG,PNG" size={18} />
                {/* uplooad progress */}
                {imageLoading && (
                  <View
                    style={{
                      backgroundColor: Colors.primary,
                      flexDirection: "row",
                      padding: 15,
                      alignItems: "center",
                      gap: 10,
                      width: "80%",
                      justifyContent: "center",
                      borderRadius: 15,
                    }}
                  >
                    <ThemedText
                      text={
                        imageLoading == "started"
                          ? "Uploading in progress"
                          : "Uploading Complete"
                      }
                      color="white"
                      size={18}
                      style="medium"
                    />
                    {imageLoading == "started" && (
                      <Refresh2 size="17" color="white" />
                    )}
                  </View>
                )}
              </Pressable>
              {/* uploaded image */}
              {image && (
                <View
                  style={{
                    padding: 15,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: Colors.cardOutline,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* image icon and image file name */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <Image size={20} color={Colors.gray} variant="Bold" />
                    <ThemedText
                      text={image.name}
                      size={15}
                      color={Colors.gray}
                    />
                  </View>
                  <ThemedText
                    text={`${Math.round(image.size / 1024)}Kb`}
                    style="medium"
                    color={Colors.gray}
                    size={17}
                  />
                </View>
              )}
            </View>
          </View>
        )}
        {/* buttons */}
        <View style={{ alignItems: "center", gap: 20 }}>
          <Button
            label="Add Book"
            action={() => {
              if (!showform) {
                setShowForm((prev) => !prev);
                return;
              }
              if (!sectionName) {
                Alert.alert("Add Section Name!", "Add section Name");
                return;
              }
              if (
                !currentAddedBook.title ||
                !currentAddedBook.copies ||
                !currentAddedBook.published_year ||
                !currentAddedBook.thumbnail
              ) {
                Alert.alert(
                  "Fill Every Field!",
                  "Fill out every filled to upload book"
                );
                return;
              } else {
                setUploadedBooks([...uploadedBooks, currentAddedBook]);
                setCurrentAddedBook({
                  available: true,
                  raters: 0,
                  rating: 0,
                });
                setImage(null);
                setImageLoading(null);
                setDate(null);
                setShowForm(false);
                return;
              }
            }}
            type="outline"
          />
          <Button
            label="Update Shelf"
            action={async () => {
              if (!sectionName || uploadedBooks.length == 0) {
                Alert.alert(
                  "Add a section",
                  "Add a section and upload a book to it"
                );
                return;
              }

              Alert.alert("Getting your shelf ready");
              let data = await createCategoryAndBooks(
                sectionName,
                uploadedBooks
              );
              setNewId(data["$id"]);
              router.push("/(librarian)/scanNFCWrite");
            }}
            disabled={uploadedBooks.length == 0}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SectionDetails;
