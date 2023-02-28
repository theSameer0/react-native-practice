import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';

export default function SeatRow(props:any) {
    // console.log(props)
    return (
        <View style = {styles.row}>
            <View style = {styles.left}>
                <Text>{props.left}</Text>
            </View>
            <View style = {styles.right}>
                <Text style = {styles.text}>{props.right}</Text>
            </View>
        </View>
    )
}