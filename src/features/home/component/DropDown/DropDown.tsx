import React from 'react'
import {
    View,
    Text,
    Pressable,
    TouchableOpacity,
    Image,
} from 'react-native'
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons'

const DropDown = (props) => {
    return (
            <TouchableOpacity
                style = {styles.button}
            >
                <Ionicon name = 'location' size={15} style = {styles.icon}/>
                <Text style = {styles.text}>Banglore</Text>
                <Ionicon name = 'caret-down' size={15} style = {styles.icon}/>
            </TouchableOpacity>
    )
}

export default DropDown;