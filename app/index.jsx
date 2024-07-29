import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import NfcManager, { NfcEvents, Ndef } from "react-native-nfc-manager";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";
import Button from "./../components/Button/Button";
const Home = () => {
  // const [isSupported, setIsSupported] = useState(null);

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

  // Tag event reader useEffect

  // useEffect(() => {
  //   NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
  //     console.log("tag found");
  //   });

  //   return () => {
  //     NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
  //   };
  // }, []);

  // const readTag = async () => {
  //   console.log("i Want to read a tag");
  //   await NfcManager.registerTagEvent();
  // };

  // if (!isSupported) {
  //   return (
  //     <SafeAreaView>
  //       <Text>NFC not supported</Text>
  //     </SafeAreaView>
  //   );
  // }

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
