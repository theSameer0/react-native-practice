import React from 'react'
import {
    View,
    Text,
    Pressable,
    TouchableOpacity,
    Image,
} from 'react-native'
import { styles } from './styles'
import FontAwesome , {parseIconFromClassName} from 'react-native-fontawesome'

const DropDown = (props) => {
    const validLocationIcon = parseIconFromClassName('fa-solid fa-location-dot');
    return (
        <View style={styles.body}>
            <TouchableOpacity
                style = {styles.button}
            >
                <Image source={require('../../../../assets/images/maps.png')}/>
                <Text>Banglore</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DropDown;