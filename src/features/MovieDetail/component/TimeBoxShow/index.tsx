import { 
    View, 
    Text,
    FlatList,
    Pressable,
    Button,
} from 'react-native'
import React , {useState} from 'react'
import {styles} from './style'
import Modal from 'react-native-modal'
import ModalBottomSheet from '../ModalBottomSheet'
import { useDispatch, useSelector } from 'react-redux'
import { setModalVisible } from '../../redux/action'
import { setBookingMovieDetail } from '../../redux/action'

export default function TimeBoxShow({item}:any) {
    const dispatch = useDispatch();
    const isModalVisible = useSelector ( (state:any) => state.movieReducer.isModalVisible)
    const handleClickOnTime = (props:any) => {
        dispatch(setModalVisible(!isModalVisible));
        console.log(props)
        let bookingData = [
            item.title,
            item.location,
            props.item,
        ]
        dispatch(setBookingMovieDetail(bookingData))
    };
    
    

  return (
    <View>
        <Text style = {styles.header}>{item.title}, {item.location}</Text>
        <FlatList 
            data = {item.data}
            horizontal
            showsHorizontalScrollIndicator = {false}
            renderItem = {
            ({item}:any)=>(
                <Pressable style = {styles.container} onPress = {()=>handleClickOnTime({item})}>
                <Text style = {styles.text}>{item}</Text>
                </Pressable>
            )
            }
        />
        
    </View>
  )
}