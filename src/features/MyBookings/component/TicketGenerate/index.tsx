import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { styles } from './style'
import { useSelector } from 'react-redux'
import MovieIntro from '~/features/MovieDetail/component/MovieIntro'
import MovieTiming from '../movieTiming'
import SeatPosition from '../SeatPosition'

export default function TicketGenerate({navigation}:any) {
    const Data = useSelector((state:any)=>state.movieReducer.bookingMovieDetail)
    const movieData = useSelector((state:any)=> state.langReducer.Data)
    const ticket = movieData[Data[3]]

  return (
    <View>
        <Ionicon name = 'arrow-back' size={20} color={'#14171A'} style = {styles.icon}
            onPress = {()=>navigation.navigate('Movies')}
        />
        <View style = {styles.body}>
            <Text style = {styles.header}>Ticket Booked</Text>
            <Image source={ticket.headImage} style = {styles.image}/>
            <MovieIntro activeData = {ticket} setStyle = {styles.intro}/>
            <MovieTiming />
            <SeatPosition />
        </View>
    </View>
  )
}