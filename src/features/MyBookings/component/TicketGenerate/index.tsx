import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import MovieIntro from '~/features/MovieDetail/component/MovieIntro'
import MovieTiming from '../movieTiming'
import SeatPosition from '../SeatPosition'
import { setTicketDetailsURL } from '../../redux/services'
import uuid from 'react-native-uuid'
import { Ticket } from '../../redux/interface'
import { setTicketDetails } from '../../redux/action'

export default function TicketGenerate({navigation,route}:any) {
  const dispatch = useDispatch()
  const bookingState = useSelector((state:any)=>state.bookingReducer)
  const ticketData = bookingState.ticketDetail;
    useEffect(() => {
      let data = updateTicket();
      console.log("useEffect Data:",data);
      setTicketDetailsURL(data,dispatch)
    }, [])
    const makeStringDate = (date:Date) => {
      return date.getDate().toString()+'-'+(date.getMonth()+1).toString()+'-'+date.getFullYear().toString()
    }
    const movieState = useSelector((state:any)=>state.movieReducer)
    const Data = movieState.bookingMovieDetail
    const seatDetail = movieState.currentSeatDetail;
    const movieData = useSelector((state:any)=> state.langReducer.Data)
    const ticket = movieData[Data[3]]
    const ticketId = uuid.v4()
    const date = new Date();
    date.setDate(date.getDate() + movieState.bookingDate);
    const dateString = makeStringDate(date)
    const updateTicket = () => {
      var seats: string = "";
      for (var i in route.params.seats){
        seats = seats + route.params.seats[i] // in TimeBoxShow we pop the last element of the split(',') array so here we don't need to worry about the last element.
      }
      var tmpTicket: Ticket = {
        id: ticketId.toString(),
        date: dateString,
        time: Data[2],
        seats: seats,
        screen: 4,
        seatCount: route.params.count,
        movieId: seatDetail.movieId ,
        theatreId: seatDetail.id,
        showId: seatDetail.id,
      }
      // console.log(tmpTicket)
      dispatch(setTicketDetails(tmpTicket))
      return tmpTicket;
    }
  return (
    <View>
        <Ionicon name = 'arrow-back' size={20} color={'#14171A'} style = {styles.icon}
            onPress = {()=>navigation.navigate('Movies2')}
        />
        <View style = {styles.body}>
            <Text style = {styles.header}>Ticket Booked</Text>
            <Image source={{uri:ticket.headImage}} style = {styles.image}/>
            <MovieIntro activeData = {ticket} setStyle = {styles.intro}/>
            <MovieTiming time = {Data[3]} date={date}/>
            <SeatPosition id = {ticketId} countSeat = {route.params.count} seats = {route.params.seats} />
        </View>
    </View>
  )
}