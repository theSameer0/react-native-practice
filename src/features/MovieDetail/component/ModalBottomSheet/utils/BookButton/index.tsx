import { View, Text , Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useDispatch, useSelector} from 'react-redux'
import { setSuccessVisible } from '~/features/MyBookings/redux/action'
import { setModalVisible, setSeatStatus } from '~/features/MovieDetail/redux/action'

function intToChar(int:number) {
  const base = 'A'.charCodeAt(0)
  return String.fromCharCode(base + int)
}

export default function BookButton({navigation}:any) {
  const dispatch = useDispatch()
  const movieState = useSelector((state:any)=>state.movieReducer)
  // const tmpSeat = movieState.tmpSeat
  const mainSeat = movieState.seat
  // const activeSeat = 
    const goToBooking = () => {
      let seats = []
      for (var i = 0;i<12;i++){
        for (var j = 0;j<12;j++){
          if(mainSeat[i][j]){
            seats.push(intToChar(i).toString()+(j+1).toString()+',')
          }
        }
      }
        // const compareVar = tmpSeat.slice()
        // dispatch(setSeatStatus(compareVar))
        dispatch(setSuccessVisible(true))
        dispatch(setModalVisible(false))
        navigation.navigate("My Bookings",{count:seats.length,seats:seats})
    }
    const getPrice = () => {
      let count = 0
      for (var i = 0;i<12;i++){
        for (var j = 0;j<12;j++){
          if(mainSeat[i][j]){
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