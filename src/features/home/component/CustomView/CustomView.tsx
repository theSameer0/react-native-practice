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
      // console.log(props.item);
      props.navigation.navigate('MovieDetail',{id:props.item.id})
  }
  // console.log(typeof(['hey','ae','adf']))
  // console.log(image.toNodeRequire)
  // console.log("image: ",props.item)
  return (
    <Pressable
      onPress={moveToMovieDetail}
    >
        <View style = {styles.body}>
          <Image style = {styles.image} source={{uri: image}} />
          {/* <Image style = {styles.image} source={{uri:"https://ik.imagekit.io/ronwon/icons/Acc2.png"}} /> */}
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
            {props.item.language?props.item.language : props.item.location}
          </Text>
        </View>
    </Pressable>
  )
}
