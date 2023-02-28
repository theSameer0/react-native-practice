import { View, Text } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { styles } from './styles'

export default function Header({lang}:any) {
    const currentBooking = useSelector((state:any)=>state.movieReducer.bookingMovieDetail)
    const currentMovie = useSelector((state:any)=>state.langReducer.currentMovie)
    
  return (
    <View style={styles.header}>
        <Text style = {styles.title}>{currentBooking[0]}, {currentBooking[1]}</Text>
        <View style = {styles.subTitle}>
            <Text style = {styles.content}>
                {currentMovie} <Text style = {styles.bullet}>{'\u2B24'}</Text> {lang} <Text style = {styles.bullet}>{'\u2B24'}</Text> {currentBooking[2]} 
            </Text>
            <Ionicon name = 'caret-down' color={'#14171A'} style = {styles.icon}/>
        </View>
    </View>
  )
}