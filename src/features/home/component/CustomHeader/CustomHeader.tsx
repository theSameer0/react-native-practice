import { Text, View } from 'react-native'
import React from 'react'
import {styles} from './style'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function CustomHeader(props:any) {
  return (
    <View style = {styles.header}>
      <Text 
        style = {styles.text}
      >
        {props.title}
      </Text>
      <Icon name='arrow-right' size={13} style = {styles.icon}/>
    </View>
  )
}