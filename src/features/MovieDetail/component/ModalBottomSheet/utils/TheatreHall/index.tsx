import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { setSeatStatus } from '~/features/MovieDetail/redux/action';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function intToChar(int:number) {
    const base = 'A'.charCodeAt(0)
    return String.fromCharCode(base + int)
}

function Seats(){
    const CreatSeat = ({ id }: any) => {
    const dispatch = useDispatch();
    const activeMovie = useSelector((store: any) => store.movieReducer);
    // const tmpSeat = activeMovie.tmpSeat;
    // let newSeat = tmpSeat.slice()
    const mainSeat = activeMovie.seat;
    let newSeat = mainSeat
    const handleSeatSelection = (row: any, col: any) => {
        if(!mainSeat[row][col]){
            newSeat[row][col] = newSeat[row][col] ? false : true
            dispatch(setSeatStatus(newSeat))
        }
    }
    let [row, col] = id.split(',')
    row = parseInt(row)
    col = parseInt(col)
    // console.log(row, col)
    return (
        < Pressable onPress={() => handleSeatSelection(row, col)}>
            <View style={[styles.screen, {
                width: 20,
                height: 20,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 16,
                borderRadius: 4
            },
            (newSeat[row][col] ? {
                backgroundColor: '#EBF7F1',
                borderColor: '#3BB273',
            } :
            {
                backgroundColor: '#F7F9FA',
                borderColor: '#D7DCE0',
            }
            )
        ]} />
        </Pressable >
        )
    }
    const seatRow = [];
    for (let i = 0; i < 11; i++) {
        const seatCol = []
        for (let j = 0; j < 11; j++) {
            if (j == 5) {
                seatCol.push(
                    <View style={[styles.screen,
                        {
                            width: 20,
                            height: 20,
                            marginLeft: 10,
                            marginTop: 16,
                            borderRadius: 4,
                            backgroundColor: '#fff',
                            borderWidth: 0
                        }]} />
                        )
                    }
            else {
                var k = j > 5 ? j - 1 : j
                let setId = i.toString() + ',' + k.toString() + ',';
                seatCol.push(
                    <CreatSeat id={setId} />
                    )
                }
            }
            seatRow.push(<View style={{ flexDirection: 'row' }}>{seatCol}</View>)
        }
    return (seatRow)
}

export default function TheatreHall() {
    const newSeat = useSelector((store:any)=> store.movieReducer.seat)
    const dispatch = useDispatch();


    return (
        <View style = {styles.theatreHall}>
            <View style={styles.stage}>
                <Text style={styles.screenText}>
                    SCREEN THIS WAY
                </Text>
                <View style={styles.screen} />
            </View>
            <View style={[{ alignSelf: 'center', },styles.seat]}>
                <Seats/>
            </View>
        </View>
    )
}