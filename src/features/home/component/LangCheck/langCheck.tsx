import React from 'react'
import {
    View,
    Text,
    FlatList,
    SectionList,
    Pressable,
    TouchableOpacity,
}   from 'react-native'
import {styles} from './style'
import LangButton from '../../component/LangButton.tsx/LangButton'

const Data = [
    'All',
    'Hindi',
    'Telugu',
    'English',
    'Tamil',
    'Bangla',
    'Assamese',
    'Oriya',
    'Kannada',
    'Khasi',
    'Malayalam',
]


const LangCheck = () => {
    return (
        <FlatList
            style = {styles.body}
            data={Data}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(item,index) => index.toString()}
            renderItem = {
                ({item})=>(
                    <LangButton lang = {item} />
                )
            }
        />
        // <TouchableOpacity
        //     onPress={updateName}
        // >

        //     <Text
        //     >
        //         Hello
        //     </Text>
        // </TouchableOpacity>
    )
}

export default LangCheck;