import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../../assets/images/logo.svg";
const HeaderLogo = () => {
  return (
    <View style={{ alignSelf: "start" }}>
      <Logo width={120} height={60} />
    </View>
  );
};

export default HeaderLogo;
