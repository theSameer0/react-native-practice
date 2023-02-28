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
import { setCurrentMovieData } from '../../redux/action'



const LangButton = (props:any) => {
    const dispatch = useDispatch();
    const activeName = useSelector((state:any) => state.langReducer)
    const Data = activeName.Data

    const updateName = () => {
        dispatch(setLang(props.lang),)
        if(props.lang === 'All'){
            dispatch(setCurrentMovieData(Data))
        }
        else{
            let newData = []
            for ( var i =0;i<Data.length ;i++){
                if(Data[i].language === props.lang){
                    newData.push(Data[i])
                }
            }
            dispatch(setCurrentMovieData(newData))
            // console.log(newData)
            // props.navigation.replace('Movies2',{Data:newData})
        }
    }
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