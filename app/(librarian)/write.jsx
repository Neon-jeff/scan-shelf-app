import { View, Text, Pressable } from "react-native";
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
} from "iconsax-react-native";
import * as ImagePicker from "expo-image-picker";

const WriteTags = () => {
  const router = useRouter();
  const [sectionName, setSectionName] = useState(null);
  const [uploadedBooks, setUploadedBooks] = useState([]);
  const [currentAddedBook, setCurrentAddedBook] = useState({});
  const [imageLoading, setImageLoading] = useState(null);
  const [image, setImage] = useState(null);

  const UploadImage = async () => {
    setImageLoading("started");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImageLoading("completed");
      setImage(result.assets[0]);
      setCurrentAddedBook({ ...currentAddedBook, image: result.assets[0].uri });
    }
  };
  console.log(currentAddedBook);

  return (
    <SafeAreaView style={{ flex: 1, padding: 25, gap: 40 }}>
      <LibraryStackHeader title={"Write Tags"} />

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
          />
        </View>
        {/* book list form  */}
        <View style={{ gap: 15 }}>
          <ThemedText text="Book List" size={27} style="semibold" />
          <View style={{ gap: 15 }}>
            <Field
              placeholder={"Book Title"}
              onChange={(text) => {
                setCurrentAddedBook({ ...currentAddedBook, title: text });
              }}
            />
            <View>
              <Field placeholder={"Publication Year"} />
              <Pressable style={{ position: "absolute", right: 20,height:'100%',justifyContent:'center' }}>
                <Calendar size={25} color="gray" />
              </Pressable>
            </View>
            <Field
              placeholder={"Number of copies"}
              onChange={(text) => {
                setCurrentAddedBook({ ...currentAddedBook, copies: text });
              }}
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
              <ThemedText text="Upload your images" size={22} style="medium" />
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
        {/* buttons */}
        <View style={{ alignItems: "center", gap: 20 }}>
          <Button
            label="Add Book"
            action={() => {
              router.push("/(librarian)/writeSuccess");
            }}
            type="outline"
          />
          <Button
            label="Add to Shelf"
            action={() => {
              router.push("/(librarian)/writeSuccess");
            }}
            disabled={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WriteTags;
