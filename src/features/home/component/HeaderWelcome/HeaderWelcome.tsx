import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import {styles} from './style'
import DropDown from '../DropDown/DropDown'
// import DropShadow from "react-native-drop-shadow";


const HeaderWelcome = (props) => {
    const name = props.name;
    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>Hello {name}!</Text>
            <DropDown text = "Banglore"/>
        </View>
    )
}
export default HeaderWelcome;