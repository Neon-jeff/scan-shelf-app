import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/Button/Button";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LibraryStackHeader from "../../components/Header/LibraryStackHeader";
import ThemedText from "../../components/ThemedText/ThemedText";
import Field from "../../components/Fields/Field";

const WriteTags = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{  flex: 1,padding:20,gap:40 }}>
      <LibraryStackHeader title={"Write Tags"} />
     
     <View>
      <ThemedText text="Section Name"/>
      <Field/>
     </View>
      <Button
        label="See Success Page"
        action={() => {
          router.push("/(librarian)/writeSuccess");
        }}
      />
    </SafeAreaView>
  );
};

export default WriteTags;
