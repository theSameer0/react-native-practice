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

export default function SeatPosition({id,countSeat,seats}:any) {

  return (
    <View style = {styles.header}>
        <SeatRow left = {'Screen'} right = {4}/>
        <SeatRow left = {'Seats('+countSeat+')'} right = {seats}/>
        <SeatRow left = {'Ticket No.'} right = {id}/>
    </View>
  )
}