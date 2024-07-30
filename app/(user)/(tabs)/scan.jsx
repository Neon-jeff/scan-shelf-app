import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderLogo from "../../../components/Header/HeaderLogo";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import ThemedText from "./../../../components/ThemedText/ThemedText";
import NfcManager, { NfcEvents, Ndef, NfcTech } from "react-native-nfc-manager";

const ScanUser = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.log(tag.ndefMessage);
      setMessage(tag.ndefMessage);
    });

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);

  useEffect(() => {
    readTag();
  });

  const readTag = async () => {
    await NfcManager.registerTagEvent();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <HeaderLogo />
      </View>
      <View style={styles.readyToScan}>
        <ThemedText>Ready to scan</ThemedText>
        {/* scan image section */}
        <View style={styles.imageStyle}>
          <Svg
            width={275}
            height={275}
            viewBox="0 0 275 275"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G clipPath="url(#clip0_302_2237)">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M196.01 180.881h1.318v25.712h-1.318v136.329a20.907 20.907 0 01-20.906 20.905H98.577a20.917 20.917 0 01-14.782-6.123 20.905 20.905 0 01-6.123-14.782V144.761a20.907 20.907 0 0120.906-20.906h76.526a20.912 20.912 0 0114.783 6.123 20.898 20.898 0 016.123 14.783v36.12zm-30.051-51.587h9.989a15.62 15.62 0 0111.039 4.573 15.606 15.606 0 014.573 11.039v197.87a15.621 15.621 0 01-9.638 14.424 15.62 15.62 0 01-5.974 1.188H99.053a15.623 15.623 0 01-11.04-4.572 15.616 15.616 0 01-4.572-11.04v-197.87a15.618 15.618 0 014.572-11.039 15.617 15.617 0 0111.04-4.573h9.33a7.41 7.41 0 00.711 6.938 7.416 7.416 0 006.156 3.28h43.841a7.42 7.42 0 006.156-3.28 7.417 7.417 0 00.712-6.938z"
                fill="#CC3A53"
              />
            </G>
            <Rect
              x={4.29688}
              y={4.29688}
              width={266.406}
              height={266.406}
              rx={133.203}
              stroke="#CC3A53"
              strokeWidth={8.59375}
            />
            <Defs>
              <ClipPath id="clip0_302_2237">
                <Rect width={275} height={275} rx={137.5} fill="#fff" />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
        <View style={styles.nfcTag}>
         <ThemedText align='center'> Hold your phone near the NFC tag to scan the section details</ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerLogo: {
    alignItems: "flex-start",
    marginTop: 12,
    marginBottom: 15,
  },
  readyToScan: {
    alignItems: "center",
    marginTop: 100,
  },
  readyToScantext: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "medium",
  },
  scanText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "medium",
  },
  imageStyle: {
    marginTop: 40,
  },
  nfcTag: {
    marginTop: 40,
  }
});

export default ScanUser;
