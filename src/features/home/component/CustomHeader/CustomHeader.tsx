import { Text, View } from 'react-native'
import React from 'react'
import {styles} from './style'

export default function CustomHeader(props) {
  return (
    <View>
      <Text style = {styles.header}>{props.title}</Text>
    </View>
  )
}

export default CustomHeader;