import { 
    View, 
    Text,
    Image,
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './style';

export default function NotFound() {
    const dispatch = useDispatch();
    const name = useSelector(state=>state.searchReducer.feature)
    
    return (
        <View style={styles.body}>
            <Image source={require('../../../../assets/images/NotFound.png')}/>
            <Text style = {styles.text}> No {name==='Movies'?'Movie':'Theatre'} Found!!</Text>
        </View>
    )
}