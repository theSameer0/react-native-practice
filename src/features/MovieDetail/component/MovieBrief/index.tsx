import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default function MovieBrief({activeData}:any) {
  return (
    <View>
        <Text style = {styles.comment}>
            {activeData.comment}
        </Text>
        <Ionicon style = {styles.caretIcon} name = 'caret-down'/>
    </View>
  )
}