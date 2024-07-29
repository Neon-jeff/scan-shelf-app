import { View, Text, Image } from "react-native";
import React from "react";

const HeaderLogo = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/logo-dark.png")}
        style={{
          height: 40,
          width: 120,
          resizeMode: "contain",
          marginVertical: 10,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default HeaderLogo;
