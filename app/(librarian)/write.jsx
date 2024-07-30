import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LibraryStackHeader from "../../components/Header/LibraryStackHeader";
import ThemedText from "../../components/ThemedText/ThemedText";
import Field from "../../components/Fields/Field";
import { Colors } from "../../constants/Colors";
import Button from "./../../components/Button/Button";
import { ScrollView } from "react-native";
import {
  ArrowRotateRight,
  Refresh2,
  Image,
  Calendar,
  CloseCircle,
} from "iconsax-react-native";
import * as ImagePicker from "expo-image-picker";
import DatePickerModal from "../../components/Modals/DatePickerModal";

const WriteTags = () => {
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
  const [showform, setShowForm] = useState(true);

  const UploadImage = async () => {
    setImageLoading("started");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (result.canceled) {
      setImageLoading(null);
    }
    if (!result.canceled) {
      setImageLoading("completed");
      setImage(result.assets[0]);
      setCurrentAddedBook({ ...currentAddedBook, image: result.assets[0].uri });
    }
  };
  console.log(currentAddedBook);
  console.log(uploadedBooks);

  return (
    <SafeAreaView style={{ flex: 1, padding: 25, gap: 40 }}>
      <LibraryStackHeader title={"Write Tags"} />
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
            value={sectionName}
          />
        </View>

        {/* Upladed Book List */}
        <View style={{ gap: 20 }}>
          <ThemedText text="Book List" size={27} style="semibold" />
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
        {(showform || uploadedBooks.length == 0) && (
          <View style={{ gap: 15 }}>
            {showform && uploadedBooks.length > 0 && (
              <ThemedText text="Add Book" size={27} style="semibold" />
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
                onPress={UploadImage}
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
                      text={image.fileName}
                      size={12}
                      color={Colors.gray}
                    />
                  </View>
                  <ThemedText
                    text={`${Math.round(image.fileSize / 1024)}Kb`}
                    style="regular"
                    color={Colors.gray}
                    size={15}
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
                !currentAddedBook.image
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
            label="Add to Shelf"
            action={() => {
              router.push("/(librarian)/writeSuccess");
            }}
            disabled={uploadedBooks.length == 0}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WriteTags;
