import { View, Text } from 'react-native';
import React from 'react';
import Button from '@/components/Button/Button';
import { useRouter } from 'expo-router';

const WriteTags = () => {
  const router = useRouter();

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Write Tags</Text>
      <Button
        label="See Success Page"
        action={() => {
          router.push('/(librarian)/writeSuccess',
          );
        }}
      />
    </View>
  );
};

export default WriteTags;
