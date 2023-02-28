import { View, Text , Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useDispatch } from 'react-redux'
import { setSuccessVisible } from '~/features/MyBookings/redux/action'
import { setModalVisible } from '~/features/MovieDetail/redux/action'

export default function BookButton({navigation}) {
  const dispatch = useDispatch()
    const goToBooking = () => {
        dispatch(setSuccessVisible(true))
        dispatch(setModalVisible(false))
        navigation.navigate("My Bookings")
    }
  return (
    <View style={styles.bookView}>
        <Pressable style = {styles.book} onPress = {goToBooking}>
            <Text style = {styles.bookText}>BOOK 300</Text>
        </Pressable>
    </View>
  )
}