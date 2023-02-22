import React from 'react'
import {
    View,
    Text,
} from 'react-native'

const DropDown = (props) => {
    return (
        <View>
            <Text>{props.active}</Text>
        </View>
    )
}

export default DropDown;