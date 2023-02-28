import { View, Text, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setModalVisible } from '../../redux/action'
import TheatreHall from './utils/TheatreHall/index'
import Header from './utils/Header'
import BookButton from './utils/BookButton'
import { setTmpSeat } from '../../redux/action'

export default function ModalBottomSheet({lang,navigation}:any) {
    const [currentSeat,setCurrentSeat] = useState(0)
    const mainSeat = useSelector((state:any)=>state.movieReducer.seat)
    const dispatch = useDispatch()
    const isModalVisible = useSelector((state:any)=>state.movieReducer.isModalVisible)

    const setModalFalse = () => {
        dispatch(setModalVisible(false));
        dispatch(setTmpSeat(mainSeat))
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
            <TheatreHall currentSeat = {currentSeat} setCurrentSeat = {setCurrentSeat}/>
            <BookButton navigation = {navigation} currentSeat = {currentSeat} setCurrentSeat = {setCurrentSeat}/>
        </View>
        </Modal>
    </View>
  )
}

// import React, { useEffect, useState } from "react";
// import { Button, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View, ScrollView, Image } from "react-native";
// import Modal from "react-native-modal";
// import { useDispatch, useSelector } from "react-redux";
// import { setSeatStatus , setModalVisible } from "../../redux/action";

// function Seats(){
//         const CreatSeat = ({ id }: any) => {
//         const dispatch = useDispatch();
//         const activeMovie = useSelector((store: any) => store.movieReducer);
//         let newSeat = activeMovie.seat;
//         const handleSeatSelection = (row: any, col: any) => {
//             newSeat[row][col] = newSeat[row][col] ? false : true
//             dispatch(setSeatStatus(newSeat))
//             // console.log(row, col)
//         }
//         let [row, col] = id.split(',')
//         row = parseInt(row)
//         col = parseInt(col)
//         console.log(row, col)
//         return (
//             < TouchableWithoutFeedback onPress={() => handleSeatSelection(row, col)}>
//                 <View style={[style.screen, {
//                     width: 20,
//                     height: 20,
//                     marginLeft: 5,
//                     marginRight: 5,
//                     marginTop: 16,
//                     borderRadius: 4
//                 },
//                 (newSeat[row][col] ? {
//                     backgroundColor: '#EBF7F1',
//                     borderColor: '#3BB273',
//                 } :
//                 {
//                     backgroundColor: '#F7F9FA',
//                     borderColor: '#D7DCE0',
//                 }
//                 )
//             ]} />
//             </TouchableWithoutFeedback >
//         )
//     }
//     const seatRow = [];
//     for (let i = 0; i < 11; i++) {
//         const seatCol = []
//         for (let j = 0; j < 11; j++) {
//             if (j == 5) {
//                 seatCol.push(
//                     <View style={[style.screen,
//                         {
//                             width: 20,
//                             height: 20,
//                             marginLeft: 10,
//                             marginTop: 16,
//                             borderRadius: 4,
//                             backgroundColor: '#fff',
//                             borderWidth: 0
//                         }]} />
//                         )
//                     }
//                     else {
//                         var k = j > 5 ? j - 1 : j
//                         let setId = i.toString() + ',' + k.toString() + ',';
//                         seatCol.push(
//                             <CreatSeat id={setId} />
//                             )
//                         }
//                     }
//                     seatRow.push(<View style={{ flexDirection: 'row' }}>{seatCol}</View>)
//                 }
//                 return (seatRow)
//             }
// function ModalBottomSheet({ navigation }: any) {
//     const dispatch = useDispatch();
//     const activeMovie = useSelector((store: any) => store.movieReducer);
//     return (
//         <View style={{}}>
//         <Modal
//             onBackdropPress={() => dispatch(setModalVisible(false))}
//             onBackButtonPress={() => dispatch(setModalVisible(false))}
//             isVisible={activeMovie.isModalVisible}
//             swipeDirection="down"
//             onSwipeComplete={() => dispatch(setModalVisible(true))}
//             animationIn="bounceInUp"
//             animationOut="bounceOutDown"
//             animationInTiming={900}
//             animationOutTiming={500}
//             backdropTransitionInTiming={1000}
//             backdropTransitionOutTiming={500}
//             style={style.modal}
//         >
//                 <View style={style.modalContent}>
//                     <Text style={style.screenText}>
//                         SCREEN THIS WAY
//                     </Text>
//                     <View style={[style.screen, { alignSelf: 'center' }]} />
//                     <View style={{ alignSelf: 'center', }}>
//                         <Seats/>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// }
// export default ModalBottomSheet;
// const style = StyleSheet.create({
//     modal: {
//         justifyContent: "flex-end",
//         margin: 0,
//         flex: 1,
//     },
//     modalContent: {
//         backgroundColor: "#fff",
//         paddingTop: 25,
//         paddingHorizontal: 12,
//         borderTopRightRadius: 20,
//         borderTopLeftRadius: 20,
//         minHeight: '65%',
//         paddingBottom: 20,
//     },
//     text: {
//         fontSize: 16,
//         color: 'black',
//         marginLeft: 16,
//     },
//     screenText: {
//         fontSize: 12,
//         marginTop: 30,
//         alignSelf: 'center',
//         // borderWidth: 5,
//         // borderColor: 'red'
//     },
//     screen: {
//         height: 14,
//         width: 260,
//         backgroundColor: '#F7F9FA',
//         borderColor: '#D7DCE0',
//         borderWidth: 1,
//     },
//     buttom: {
//         // marginTop: 8,
//         borderTopWidth: 1,
//         backgroundColor: '#4A148C',
//         borderRadius: 8,
//     },
//     book: {
//         fontSize: 16,
//         marginTop: 7,
//         marginBottom: 7,
//         color: 'white',
//         alignSelf: 'center',
//     }
// });