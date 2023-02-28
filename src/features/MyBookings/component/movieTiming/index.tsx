import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useSelector } from 'react-redux'



export default function MovieTiming() {
    const bookingDate = useSelector((state:any)=>state.movieReducer)
    const date = new Date();
    date.setDate(date.getDate() + bookingDate.bookingDate);
    const bookMovieDetail = bookingDate.bookingMovieDetail
    

  return (
    <View style = {styles.header}>
        <View style = {styles.date}>
            <Text>Date</Text>
            <Text style = {styles.text}>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>

        </View>
        <View style = {styles.time}>
            <Text>Show Time</Text>
            <Text style = {styles.text}>{bookMovieDetail[2]}</Text>
        </View>
    </View>
  )
}