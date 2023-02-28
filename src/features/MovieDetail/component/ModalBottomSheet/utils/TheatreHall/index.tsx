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


export default function TheatreHall() {
    const newSeat = useSelector((state:any)=> state.movieReducer.seat)
    const dispatch = useDispatch();
    
    const updateSeat = (row:any,col:any) => {
        console.log('before',newSeat[row][col])
        newSeat[row][col] = newSeat[row][col] ? false: true
        console.log('after',newSeat[row][col])
        dispatch(setSeatStatus(newSeat))
    }
    
    const Seats = () => {
        var seats = []
        const Square = (props:any) => {
            let [row,col] = props.id.split(',')
            row = parseInt(row)
            col = parseInt(col)        
            let val = newSeat[row][col]
            return (
                <Pressable key = {props.keyExtractor} id = {props.keyExtractor} onPress= {()=>updateSeat(row,col)}>
                    <View style = {[
                        styles.cell,
                        (val?
                            {
                                backgroundColor: '#eaf7f2',
                                borderColor: '#47b67b',
                            }
                            :
                            {
                                backgroundColor: '#F7F9FA',
                                borderColor: '#D7DCE0',
                            }
                            ),
                        ]} 
                        />
                </Pressable>
            )
        }
        for (var i = 0;i<13;i++){
            var rows = []
            var cols = []
            if(i===6){
                for (var j = 0;j<12;j++){
                    var setId = i.toString() + ',' + j.toString();
                    cols.push(<View id = {setId} key = {setId} style = {styles.visible}></View>)
                }
                rows.push(<View style = {styles.col}>{cols}</View>)
            }else {
                for (var j = 0 ; j<12;j++){
                    var k = i>6?i-1:i
                    var setId = k.toString() + ',' + j.toString();
                    console.log(setId)
                    cols.push(<Square keyExtractor = {setId} id = {setId}/>)
                }
                rows.push(<View id = {i.toString()+'row'} key = {i.toString()+'row'} style = {styles.col}>{cols}</View>)
            }
            seats.push(rows)
        }
    
        return (seats)
        
    }
        
        return (
        <View style = {styles.theatreHall}>
            <View style = {styles.stage}>
                <Text style = {styles.screenText}>SCREEN THIS WAY</Text>
                <View style = {styles.screen}></View>
            </View>
            <View style = {styles.seat}>
                <Seats />
            </View>
        </View>
    )
}