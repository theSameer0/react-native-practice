import { 
    View, 
    Text,
    TouchableOpacity,
    
} from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { setCurrentFeature } from '../../redux/action';
import { styles } from './style'

export default function CustomFeature(props:any) {
    const feature = props.name;
    const dispatch = useDispatch();
    const activeFeature = useSelector((state:any) => state.featureReducer)
    const onPressHandler = () => {
        dispatch(setCurrentFeature(feature))
    }
    return (
        <TouchableOpacity 
            style = {[
                {
                    borderBottomWidth: feature === activeFeature.feature ? 3:0
                },
                {
                    borderRadius: feature === activeFeature.feature ? 2 : 0,
                },
                {
                    borderColor : feature === activeFeature.feature ? '#6a1b9b':'#fff'
                },
                styles.body
            ]}
            onPress = {
                onPressHandler
            }
        >
            <Text 
                style = {[
                    {
                        color : feature === activeFeature.feature ? '#6a1b9b': '#6d727a'
                    },
                    styles.item
                ]}
            >
                {feature}
            </Text>
        </TouchableOpacity>
    )
}