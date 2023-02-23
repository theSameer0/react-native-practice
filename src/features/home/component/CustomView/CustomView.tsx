import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native'
import * as React from 'react'
import {styles} from './styles'

export default function CustomView(props:any) {
  let {name , comment, image} = props.item

  const moveToMovieDetail = () => {
      props.navigation.navigate('MovieDetail')
  }
  return (
    <Pressable
      onPress={moveToMovieDetail}
    >
        <View style = {styles.body}>
          <Image style = {styles.image} source={image} />
          <Text 
            style = {styles.title}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text 
            style = {styles.comment}
            numberOfLines={1}
          >
            {/* Hello */}
            {comment}
          </Text>
        </View>
    </Pressable>
  )
}
