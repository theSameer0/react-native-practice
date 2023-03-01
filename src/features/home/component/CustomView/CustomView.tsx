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
  let {name , image} = props.item

  const moveToMovieDetail = () => {
      dispatch(setCurrentMovie(name))
      props.navigation.navigate('MovieDetail',{key:props.item.key})
  }
  // console.log(typeof(['hey','ae','adf']))
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
            {props.item.language?props.item.language : props.item.comment}
          </Text>
        </View>
    </Pressable>
  )
}
