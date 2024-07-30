import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import Button from "@/components/Button/Button"


const Library = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>Library</Text>
      <Button
        label="See Success Page"
        action={() => {
          router.push('/(librarian)/librarySuccess',
          );
        }}
      />
    </View>
  );
}

export default Library