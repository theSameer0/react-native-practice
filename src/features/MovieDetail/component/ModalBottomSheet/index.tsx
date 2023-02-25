import { View, Text } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setModalVisible } from '../../redux/action'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { setBookingMovieDetail } from '../../redux/action'

const Seats = ({currentSeat}:any) => {
    // const dispatch = useDispatch();
    // dispatch(setBookingMovieDetail({row:3,col:2,payload:true}))
    // console.log(currentSeat)
    var seats = []
    for (var i = 0;i<13;i++){
        var rows = []
        var cols = []
        if(i===6){
            for (var j = 0;j<12;j++){
                cols.push(<View style = {styles.visible}></View>)
            }
            rows.push(<View style = {styles.col}>{cols}</View>)
            seats.push(rows)
        }else {
            for (var j = 0 ; j<12;j++){
                var k = i>6?i-1:i
                currentSeat[k][j] ? 
                cols.push(<View style = {styles.true}></View>)
                : 
                cols.push(<View style = {styles.false}></View>)
            }
            rows.push(<View style = {styles.col}>{cols}</View>)
            seats.push(rows)
        }
    }
    return (
        [seats]
    )
}

export default function ModalBottomSheet({lang}:any) {
    const dispatch = useDispatch()
    const isModalVisible = useSelector((state:any)=>state.movieReducer.isModalVisible)
    const currentBooking = useSelector((state:any)=>state.movieReducer.bookingMovieDetail)
    const currentMovie = useSelector((state:any)=>state.langReducer.currentMovie)
    const currentSeat = useSelector((state:any)=>state.movieReducer.seat)

    const setModalFalse = () => {
        dispatch(setModalVisible(false));
    }
    const handleClickOnTime = () => {
        dispatch(setModalVisible(!isModalVisible))
    }
    console.log(currentSeat)
    console.log(currentBooking)
    return (
    <View style={{ flex: 1 }}>
        <Modal
            onBackdropPress={setModalFalse}
            onBackButtonPress={setModalFalse}
            isVisible={isModalVisible}
            swipeDirection="down"
            onSwipeComplete={()=>handleClickOnTime()}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={4000}
            backdropTransitionOutTiming={1000}
            style={styles.modal}
        >
        <View style = {styles.modalContent}>
            <View style={styles.header}>
                <Text style = {styles.title}>{currentBooking[0]}, {currentBooking[1]}</Text>
                <View style = {styles.subTitle}>
                    <Text style = {styles.content}>
                        {currentMovie} <Text style = {styles.bullet}>{'\u2B24'}</Text> {lang} <Text style = {styles.bullet}>{'\u2B24'}</Text> {currentBooking[2]} 
                    </Text>
                    <Ionicon name = 'caret-down' color={'#14171A'} style = {styles.icon}/>
                </View>
            </View>
            <View style = {styles.theatreHall}>
                <View style = {styles.stage}>
                    <Text style = {styles.screenText}>SCREEN THIS WAY</Text>
                    <View style = {styles.screen}></View>
                </View>
                <View style = {styles.seat}>
                    <Seats currentSeat = {currentSeat}/>
                </View>
            </View>
        </View>
        </Modal>
    </View>
  )
}