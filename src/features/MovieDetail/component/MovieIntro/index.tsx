import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default function MovieIntro(props: any) {
    let activeData = props.activeData
    if(!props)return null
    return (
        <View style = {[styles.content,props.setStyle]}>
            <Text style = {styles.title}>{activeData.name}</Text>
            <View style = {styles.header}>
                <Text style = {styles.text}>
                    {activeData.tags[0]} 
                </Text>
                <Text style = {styles.sensorButton}>{activeData.tags[1]}</Text> 
                <Text style = {styles.text}> {activeData.tags[2]} .</Text>
                <Text style = {styles.text}> {activeData.tags[3]} .</Text>
                <Text style = {styles.text}> {activeData.tags[4]}
                </Text>
            </View>       
        </View>
  )
}