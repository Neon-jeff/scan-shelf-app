import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import NfcManager, { NfcEvents, Ndef, NfcTech } from "react-native-nfc-manager";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router, Stack } from "expo-router";
import Button from "./../components/Button/Button";
import ThemedText from "@/components/ThemedText/ThemedText";
const Home = () => {
  // const [isSupported, setIsSupported] = useState(null);

  // const [progress, setProgess] = useState("");

  // const [tag, setTag] = useState("");

  // useEffect(() => {
  //   checkSupported();
  // }, []);

  // const checkSupported = async () => {
  //   try {
  //     const result = await NfcManager.isSupported();
  //     setIsSupported(result);
  //     if (result) {
  //       NfcManager.start();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // // Tag event reader useEffect

  // useEffect(() => {
  //   NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
  //     console.log(tag.ndefMessage);
  //     setProgess("Card found");
  //     console.log("tag found");
  //     setTag(tag.ndefMessage);
  //   });

  //   return () => {
  //     NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
  //   };
  // }, []);

  // if (!isSupported) {
  //   return (
  //     <SafeAreaView>
  //       <Text>NFC not supported</Text>
  //     </SafeAreaView>
  //   );
  // }
  // const readTag = async () => {
  //   setProgess("Reading for nearby card, put phone close to nfc");
  //   await NfcManager.registerTagEvent();
  // };



  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        flex: 1,
        gap: 20,
      }}
    >
      {/* <ThemedText text={"NFC TAG :" + tag} size={20} style="medium" />
      <ThemedText text={progress} />
      <Button label="Scan NFC Tags" action={readTag} /> */}
      <Button
        label="Get to user layout"
        action={() => {
          router.push("/(user)/(tabs)");
        }}
      />

      <Button
        label="Get to librarian layout"
        action={() => {
          router.push("/(librarian)/(tabs)/home");
        }}
        type="outline"
      />
      <Button
        label="Get to Onboarding layout"
        action={() => {
          router.push("/(onboarding)/screen1");
        }}
        type="outline"
      />
    </SafeAreaView>
  );
};

export default Home;
