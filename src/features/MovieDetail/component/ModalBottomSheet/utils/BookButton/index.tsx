import { View, Text , Pressable, Alert } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useDispatch, useSelector} from 'react-redux'
import { setSuccessVisible } from '~/features/MyBookings/redux/action'
import { setModalVisible, setSeatStatus } from '~/features/MovieDetail/redux/action'
import { setSeatStatusURL } from '~/features/MovieDetail/redux/services'

function intToChar(int:number) {
  const base = 'A'.charCodeAt(0)
  return String.fromCharCode(base + int)
}

export default function BookButton({navigation}:any) {
  const dispatch = useDispatch()
  const movieState = useSelector((state:any)=>state.movieReducer)
  const tmpSeat = movieState.seat;
  // const activeSeat = 
  const goToBooking = () => {
      const mainSeat = movieState.seat
      let seats = []
      let overAllSeats = []
      let initialState = Array(12).fill(false).map((row)=>new Array(12).fill(false));
      let cnt = 0;
      for ( var i = 0;i<12;i++){
        for (var j = 0;j<12;j++){
          // if(!mainSeat[i][j] && tmpSeat[i][j]){
          //   cnt ++;
          //   seats.push(intToChar(i).toString()+(j+1).toString()+',')
          // }
          if(tmpSeat[i][j].state==1){
            cnt++;
            seats.push(intToChar(i).toString()+(j+1).toString()+',')
            overAllSeats.push(intToChar(i).toString()+(j+1).toString()+',')
          }
          if(tmpSeat[i][j].state==2){
            cnt++;
            overAllSeats.push(intToChar(i).toString()+(j+1).toString()+',')
          }
        }
      }
      if(cnt == 0){
        Alert.alert("Please Select atleast 1 Seat before proceed!!");
        return;
      }

      const postData = movieState.currentSeatDetail;
      const getTime = movieState.bookingMovieDetail[2]
      let sendSeat: string = "";
      for (var i in overAllSeats){
        sendSeat = sendSeat + overAllSeats[i];
      }
      // const compareVar = tmpSeat.slice()
      setSeatStatusURL(postData.movieId,postData.id,postData.data,getTime,sendSeat);
      dispatch(setSuccessVisible(true))
      dispatch(setModalVisible(false))
      navigation.navigate("My Bookings",{count:seats.length,seats:seats})
    }
    const getPrice = () => {
      let count = 0
      for (var i = 0;i<12;i++){
        for (var j = 0;j<12;j++){
          if(tmpSeat[i][j].state==1){
            count ++ 
          }
        }
      }
      // console.log(count)
      return count*300
    }

  return (
    <View style={styles.bookView}>
        <Pressable style = {styles.book} onPress = {goToBooking}>
            <Text style = {styles.bookText}>BOOK {getPrice()}</Text>
        </Pressable>
    </View>
  )
}