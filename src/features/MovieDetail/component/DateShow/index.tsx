import { View, Text, Touchable, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingDate } from '../../redux/action';


export default function DateShow(props:object) {
    const dispatch = useDispatch();
    const bookingDate = useSelector((state:object)=>state.movieReducer.bookingDate)
    const {date , month , day} = props.currentData;
    const ind = props.index;
    const changeDate = () => {
        dispatch(setBookingDate(ind))
        // console.log(bookingDate)
    }
    // console.log(props.index)
    return (
        <Pressable 
            style = {[
                bookingDate === ind ? {
                    borderBottomWidth: 1,
                    borderBottomColor: '#6A1B9A',
                }
                :{}
                ,
                styles.day]}
            onPress = {changeDate}
        >
            <Text 
                style = {[
                    bookingDate === ind ? {color: '#6A1B9A',}
                    :
                    {color: ind < 3? '#3C444D' : '#C0C6CC' },
                    styles.text
                ]}
            >{date} {month}</Text>
            <Text 
                style = {[
                    bookingDate === ind ? {color: '#6A1B9A',}
                    :
                    {color: ind < 3? '#3C444D' : '#C0C6CC'},
                    styles.text
                ]}
            >{day}</Text>
        </Pressable>
    )
}