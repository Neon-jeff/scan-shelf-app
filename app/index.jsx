import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import NfcManager, { NfcEvents, Ndef } from "react-native-nfc-manager";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
const Home = () => {
  const [isSupported, setIsSupported] = useState(null);

  useEffect(() => {
    checkSupported();
  }, []);

  // check if device supports nfc function

  const checkSupported = async () => {
    try {
      const result = await NfcManager.isSupported();
      setIsSupported(result);
      if (result) {
        NfcManager.start();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Tag event reader useEffect

  useEffect(() => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.log("tag found");
    });

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);

  const readTag = async () => {
    console.log("i Want to read a tag");
    await NfcManager.registerTagEvent();
  };

  if (!isSupported) {
    return (
      <SafeAreaView>
        <Text>NFC not supported</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Pressable
        style={{
          backgroundColor: "lightblue",
          width: "50%",
          padding: 20,
          alignItems: "center",
          borderRadius: 10,
        }}
        onPress={readTag}
      >
        <Text style={{ fontSize: 20 }}>Scan Tag</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
