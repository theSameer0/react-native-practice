import { View, Text, Pressable,Alert } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setModalVisible } from '../../redux/action'
import TheatreHall from './utils/TheatreHall/index'
import Header from './utils/Header'
import BookButton from './utils/BookButton'


export default function ModalBottomSheet({lang,navigation}:any) {
    const dispatch = useDispatch()
    const isModalVisible = useSelector((state:any)=>state.movieReducer.isModalVisible)

    const setModalFalse = () => {
        dispatch(setModalVisible(false));
    }
    const handleClickOnTime = () => {
        dispatch(setModalVisible(!isModalVisible))
    }
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
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            style={styles.modal}
        >
        <View style = {styles.modalContent}>
            <Header lang = {lang} navigation = {navigation}/>
            <TheatreHall/>
            <BookButton navigation = {navigation}/>
        </View>
        </Modal>
    </View>
  )
}