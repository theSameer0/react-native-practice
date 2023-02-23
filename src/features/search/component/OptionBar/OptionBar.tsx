import React from 'react'
import {
    FlatList,
} from 'react-native'
import CustomFeature from '../CustomFeature/CustomFeature'
import { styles } from './style'

const Data = [
    'Movies',
    'Theatres'
]

export default function OptionBar () {


    return (
        <FlatList 
            data = {Data}
            keyExtractor = {(item,index)=>index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style = {styles.body}
            renderItem = {
                ({item})=>(
                    <CustomFeature name = {item} />
                )
            }
        />
    )
}