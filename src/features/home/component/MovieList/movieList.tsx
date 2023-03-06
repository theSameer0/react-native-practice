import { 
    Text, 
    View,
    FlatList,
} from 'react-native'
import React, { useState } from 'react'
import CustomView from '../CustomView/CustomView'
import CustomHeader from '../CustomHeader/CustomHeader'
import {styles} from './style'
import { useSelector } from 'react-redux'

export default function MovieList({navigation,route}:any) {
    const Data = useSelector((state:any)=>state.langReducer.currentMovieData)
    return (
    <View style = {styles.body}>
        <CustomHeader title="Movies"/>
        <FlatList 
            data={Data}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(item,index)=>index.toString()}
            renderItem = {
                ({item})=> <CustomView item = {item} navigation={navigation}/>
            }
        />
    </View>
  )
}
