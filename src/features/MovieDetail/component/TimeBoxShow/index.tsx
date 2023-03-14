import { 
    View, 
    Text,
    FlatList,
    Pressable,
    Button,
} from 'react-native'
import React, { useEffect } from 'react'
import {styles} from './style'
import Modal from 'react-native-modal'
import ModalBottomSheet from '../ModalBottomSheet'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSeatDetail, setModalVisible, setSeatStatus, setTmpSeat } from '../../redux/action'
import { setBookingMovieDetail } from '../../redux/action'
import { makeSeatAvail } from '../../redux/services'
import { Seat } from '../../redux/interface'

function charToInt(char:string){
    const base = 'A'.charCodeAt(0);
    const num = char.charCodeAt(0);
    return num-base;
}
function intToChar(x:number){
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode(base+x);
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
        let initialVal: Seat[][] = Array(12).fill({}).map((row)=>new Array(12).fill({}));

        for(var i =0;i<12;i++){
            for(var j = 0;j<12;j++){
                var tmp: Seat = {
                    id:intToChar(i)+j.toString(),
                    state: 0,
                    booked: false,
                }
                initialVal[i][j] = tmp;
            }
        }
        // console.log(initialVal)
        // initialVal[0][0]=true;
        let seatArray = props.item.seats.split(',');
        seatArray.pop();
        if(!(seatArray.length==1 && seatArray[0]=="")){
            for(var i in seatArray){
                let val = seatArray[i];
                let row = charToInt(val[0]), col = parseInt(val.substring(1))-1;
                // console.log(row,typeof(row),col,typeof(col))
                initialVal[row][col].state = 2;
                initialVal[row][col].booked = true;
            }
        }
        // console.log(item)
        // console.log(initialVal)
        // dispatch(setTmpSeat(initialVal))
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