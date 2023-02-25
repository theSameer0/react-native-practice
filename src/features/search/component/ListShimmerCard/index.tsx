import { 
    View, 
    Text 
} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { ShimmerCard } from '../ShimmerCard/ShimmerCard'

var Data = [<ShimmerCard/>]
for ( var i =0 ; i<5;i++){
    Data.push(<ShimmerCard/>)
}

export default function ListShimmerCard() {
  return (
    <FlatList 
        data = {Data}
        keyExtractor = {(item,index) => index.toString()}
        renderItem = {
            ({item}) => item
        }
    />
  )
}