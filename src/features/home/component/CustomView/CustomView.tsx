import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native'
import React from 'react'
import {styles} from './styles'

export default function CustomView(props:any) {
  let {name , comment, image} = props.item
  return (
    <Pressable
    >
        <View style = {styles.body}>
          <Image style = {styles.image} source={image} />
          <Text style = {styles.title}>
            {name}
          </Text>
          <Text style = {styles.comment}>
            {comment}
          </Text>
        </View>
    </Pressable>
  )
}
