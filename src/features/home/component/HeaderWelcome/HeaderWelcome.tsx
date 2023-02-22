import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import {styles} from './style'

const HeaderWelcome = (props) => {
    const name = props.name;
    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>Hello {name}!</Text>
        </View>
    )
}
export default HeaderWelcome;