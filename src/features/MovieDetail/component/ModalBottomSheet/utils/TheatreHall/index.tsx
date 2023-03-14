import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { setSeatStatus, setTmpSeat } from '~/features/MovieDetail/redux/action';

function intToChar(int:number) {
    const base = 'A'.charCodeAt(0)
    return String.fromCharCode(base + int)
}


interface Seats {
    seat: boolean[][],
};

function Seats(){
    const CreatSeat = ({ id }: any) => {
    const dispatch = useDispatch();
    const activeMovie = useSelector((store: any) => store.movieReducer);
    // const tmpSeat = activeMovie.tmpSeat;
    // let newSeat = tmpSeat.slice()
    const mainSeat = activeMovie.seat;
    // let initialVal = Array(12).fill(false).map(row=>new Array(12).fill(false))    // console.log(initialVal)
    // const [mainSeat,setMainSeat] = useState<Boolean[][]>(initialVal)
    let newSeat = mainSeat
    const handleSeatSelection = (row: any, col: any) => {
        if(newSeat[row][col].state == 1){
            newSeat[row][col].state = 0;
            newSeat[row][col].booked = false;
        }else if(newSeat[row][col].state == 0){
            newSeat[row][col].state = 1;
            newSeat[row][col].booked = true;
        }
        dispatch(setSeatStatus(newSeat))
    }
    let [row, col] = id.split(',')
    row = parseInt(row)
    col = parseInt(col)
    // console.log(row, col)
    return (
        < Pressable onPress={() => handleSeatSelection(row, col)}>
            <View 
            style = {[styles.cell,
            mainSeat[row][col].state == 1?{
                backgroundColor: '#EBF7F1',
                borderColor: '#3BB273',
            }:null,
            mainSeat[row][col].state == 0?{
                backgroundColor: '#F7F9FA',
                borderColor: '#D7DCE0',
            }:null,
            mainSeat[row][col].state == 2?{
                backgroundColor: '#F7F1E5',
                borderColor: '#FFAB00',
            }:null,
            ]}
        />
        </Pressable >
        )
    }
    const seatRow = [];
    for (let i = 0; i < 12; i++) {
        const seatCol = []
        for (let j = 0; j < 13; j++) {
            if (j == 6) {
                seatCol.push(
                    <View style={styles.visible} />
                        )
                    }
            else {
                var k = j > 6 ? j - 1 : j

                let setId = i.toString() + ',' + k.toString() + ',';
                seatCol.push(
                    <CreatSeat id={setId} />
                    )
                }
            }
            seatRow.push(<View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>{seatCol}</View>)
        }
    return (seatRow)
}

export default function TheatreHall() {
    return (
        <View style = {styles.theatreHall}>
            <View style={styles.stage}>
                <Text style={styles.screenText}>
                    SCREEN THIS WAY
                </Text>
                <View style={styles.screen} />
            </View>
            <View style={styles.seat}>
                <Seats/>
            </View>
        </View>
    )
}