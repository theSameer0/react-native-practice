import { 
    View, 
    Text,
    FlatList,
    Pressable,
} from 'react-native'
import React from 'react'
import { styles } from './style'
import TimeBoxShow from '../TimeBoxShow'

export default function MovieTimingShow ({makeTheatreTimingData}:any) {
  return (
    <FlatList 
        data={makeTheatreTimingData()}
        keyExtractor = {(item,index) => index.toString()}
        showsVerticalScrollIndicator = {false}
        // horizontal
        // contentContainerStyle = {{paddingHorizontal : 10}
        renderItem = {
          ({item})=>(
            <TimeBoxShow item = {item}/>
          )
        }
      />
  )
}