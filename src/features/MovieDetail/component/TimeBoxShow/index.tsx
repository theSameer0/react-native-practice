import { 
    View, 
    Text,
    FlatList,
    Pressable,
    Button,
} from 'react-native'
import React from 'react'
import {styles} from './style'
import Modal from 'react-native-modal'
import ModalBottomSheet from '../ModalBottomSheet'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSeatDetail, setModalVisible, setSeatStatus, setTmpSeat } from '../../redux/action'
import { setBookingMovieDetail } from '../../redux/action'

function charToInt(char:string){
    const base = 'A'.charCodeAt(0);
    const num = char.charCodeAt(0);
    return num-base;
}

export default function TimeBoxShow({item,Id}:any) {
    const dispatch = useDispatch();
    const handleClickOnTime = (props:any) => {
        dispatch(setModalVisible(true));
        // console.log(props,isModalVisible)
        let bookingData = [
            item.title,
            item.location,
            props.item.timing,
            Id,
        ]
        let initialVal: Boolean[][] = Array(12).fill(false).map(row=>new Array(12).fill(false))
        // console.log(initialVal)
        // initialVal[0][0]=true;
        let seatArray = props.item.seats.split(',');
        seatArray.pop();
        if(!(seatArray.length==1 && seatArray[0]=="")){
            for(var i in seatArray){
                let val = seatArray[i];
                // console.log("int:",val);

                let row = charToInt(val[0]), col = parseInt(val.substring(1))-1;
                // console.log(row,typeof(row),col,typeof(col))
                initialVal[row][col] = true;
            }
        }
        // console.log(item)
        // console.log(initialVal)
        dispatch(setTmpSeat(initialVal))
        dispatch(setSeatStatus(initialVal))
        dispatch(setCurrentSeatDetail(item))
        //    console.log(bookingData)
        
        let compareVar = bookingData
        dispatch(setBookingMovieDetail(compareVar))
    };
    
    // console.log("the item",item)

  return (
    <View>
        <Text style = {styles.header}>{item.title}, {item.location}</Text>
        <FlatList 
            data = {item.time}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(item,index)=>index.toString()}
            renderItem = {
            ({item}:any)=>(
                <Pressable style = {styles.container} onPress = {()=>handleClickOnTime({item})}>
                <Text style = {styles.text}>{item.timing}</Text>
                </Pressable>
            )}
        />
        
    </View>
  )
}