import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native'
import * as React from 'react'
import {styles} from './styles'
import { useDispatch } from 'react-redux'
import { setCurrentMovie } from '../../redux/action'

export default function CustomView(props:any) {
  const dispatch = useDispatch();
  let {name , comment, image} = props.item

  const moveToMovieDetail = () => {
      dispatch(setCurrentMovie(name))
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
