import { View, Text } from 'react-native'
import React , {useState} from 'react'
import { styles } from './style'
import { useSelector } from 'react-redux'
import uuid from 'react-native-uuid';
import SeatRow from './component/SeatRow/index';


function intToChar(int:number) {
    const base = 'A'.charCodeAt(0)
    return String.fromCharCode(base + int)
}

export default function SeatPosition({countSeat,seats}:any) {
    // const bookingDate = useSelector((state:any)=>state.movieReducer)
    // const seatStatus = bookingDate.tmpSeat;
    // let countSeat = 0
    // let seats = []
    // for( var i = 0;i<12;i++){
    //     for(var j = 0;j<12;j++){
    //         if(seatStatus[i][j]){
    //             let seatId = intToChar(i).toString() + j.toString() + ',';
    //             countSeat++
    //             seats.push(seatId)
    //         }
    //     }
    // }
    // console.log(uniqid())
  return (
    <View style = {styles.header}>
        <SeatRow left = {'Screen'} right = {4}/>
        <SeatRow left = {'Seats('+countSeat+')'} right = {seats}/>
        <SeatRow left = {'Ticket No.'} right = {uuid.v4()}/>
    </View>
  )
}