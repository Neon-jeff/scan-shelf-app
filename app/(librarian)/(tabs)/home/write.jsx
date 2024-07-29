import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LibraryStackHeader from '../../../../components/Header/LibraryStackHeader'

const WriteTag = () => {
  return (
    <SafeAreaView>
      <LibraryStackHeader title={'Write Tag'}/>
    </SafeAreaView>
  )
}

export default WriteTag