import React from 'react'
import {
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
    Image,
} from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch , useSelector } from 'react-redux'
import { setCurrentKeyword } from '../../redux/action'

export default function SearchBar () {
    const dispatch = useDispatch()
    const activeKeyword = useSelector(state=>state.featureReducer)
    const updateKeyword = (value:any) => {
        dispatch(setCurrentKeyword(value))
        // console.log(activeKeyword);
    }

    return (
        <View style = {styles.body}>
            <View
                style = {styles.search}
            >
                <Image style = {styles.icon} source={require('../../../../assets/images/search.png')}/>
                <TextInput 
                    placeholder='Search'
                    style = {styles.input}
                    onChangeText = {(value:any)=>updateKeyword(value)}
                />
            </View>
        </View>
    )
}