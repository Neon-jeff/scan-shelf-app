import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import ThemedText from "./../../../components/ThemedText/ThemedText";
import {
  Scan,
  Home2,
  SliderHorizontal1,
  SliderHorizontal,
} from "iconsax-react-native";

const TabIcon = ({ focused, label, children }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {children}
      <ThemedText
        text={label}
        color={focused ? Colors.primary : Colors.tabInActive}
        style={focused?'semibold':'regular'}
      />
    </View>
  );
};

const UserTabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowOpacity: 0,
          shadowColor: "transparent",
          height: 66,
        },
      }}
      sceneContainerStyle={{ backgroundColor: Colors.background }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label={"Home"}>
              <Home2
                size={24}
                color={focused ? Colors.primary : Colors.tabInActive}
                variant={focused ? "Bold" : "Outline"}
              />
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label={"Scan"}>
              <Scan
                size={24}
                color={focused ? Colors.primary : Colors.tabInActive}
                variant={focused ? "Bold" : "Outline"}
              />
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="category"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label={"Categories"}>
              {focused ? (
                <SliderHorizontal
                  size={24}
                  color={focused ? Colors.primary : Colors.tabInActive}
                  variant={focused ? "Bold" : "Outline"}
                />
              ) : (
                <SliderHorizontal1
                  size={24}
                  color={focused ? Colors.primary : Colors.tabInActive}
                  variant={focused ? "Bold" : "Outline"}
                />
              )}
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
};

export default UserTabsLayout;