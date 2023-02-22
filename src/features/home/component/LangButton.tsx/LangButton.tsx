import React from 'react'
import {
    Text,
    View,
    Pressable,
    Alert,
    TouchableOpacity,
} from 'react-native'
import {styles} from './styles'
import { useDispatch , useSelector } from 'react-redux'
import { setLang } from '../../redux/action'

const LangButton = (props:any) => {
    const dispatch = useDispatch();
    const activeName = useSelector((state:any) => state.langReducer)

    const updateName = () => {
        dispatch(setLang(props.lang))
    }
    // if(activeName === props.name){
    //     return (
    //         <Pressable
    //             style = {({pressed})=>[
    //                 {
    //                     backgroundColor:'#dbd0e8',
    //                     borderColor: '#4c178d',
    //                 },
    //                 styles.button
    //             ]}
    //         >
    //             <Text>{props.name}</Text>
    //         </Pressable>
    //     )
    // }else {
    //     return (
    //         <Pressable
    //             style = {({pressed})=>[,
    //                 styles.button
    //             ]}
    //         >
    //             <Text>{props.name}</Text>
    //         </Pressable>
    //     )
    // }
    return (
        <TouchableOpacity
            style = {[{backgroundColor:props.lang === activeName.lang?'#dbd0e8':'#fff'},
                {borderColor: props.lang === activeName.lang? '#4c178d': '#8f959a'},
                styles.button]}
            onPress = {updateName}
        >
            <Text>{props.lang}</Text>
        </TouchableOpacity>
    )
}

export default LangButton;