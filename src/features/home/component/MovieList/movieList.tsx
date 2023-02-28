import { 
    Text, 
    View,
    FlatList,
} from 'react-native'
import React from 'react'
import CustomView from '../CustomView/CustomView'
import CustomHeader from '../CustomHeader/CustomHeader'
import {styles} from './style'
import { useSelector } from 'react-redux'
// const Data = [
//             {
//                 name:'Matrix',
//                 comment: 'English',
//                 image: require('../../../../assets/images/Matrix.png'),
//             },
//             {
//                 name: '83',
//                 comment: 'Hindi',
//                 image: require('../../../../assets/images/83.png'),
//             },
//             {
//                 name: 'Saamanyudu',
//                 comment: 'Telugu',
//                 image: require('../../../../assets/images/Saamanyudu.png'),
//             },
//             {
//                 name: 'Pushpa',
//                 comment: 'Telugu',
//                 image: require('../../../../assets/images/Pushpa.png'),
//             }
// ]
export default function MovieList({navigation}) {
    const Data = useSelector((state:any)=>state.langReducer.Data)
  return (
    <View style = {styles.body}>
        <CustomHeader title="Movies"/>
        <FlatList 
            data={Data}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(item)=>item.toString()}
            renderItem = {
                ({item})=> <CustomView item = {item} navigation={navigation}/>
            }
        />
    </View>
  )
}
