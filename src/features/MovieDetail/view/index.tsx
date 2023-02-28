import { 
    View, 
    Text,
    Image,
} from 'react-native'
import React from 'react'
import {styles} from './style'
import Ionicon from 'react-native-vector-icons/Ionicons'
// import {Data as TimingData} from '../../home/component/TheatreList/TheatreList'
import { useDispatch,useSelector } from 'react-redux'
import MovieIntro from '../component/MovieIntro/index'
import MovieDateShow from '../component/MovieDateShow/index'
import MovieTimingShow from '../component/MovieTimingShow/index'
import ModalBottomSheet from '../component/ModalBottomSheet'
import MovieBrief from '../component/MovieBrief'
// const Data = {
//     Matrix : {
//       image : require('~/assets/images/MatrixHeader.png'),
//       name: 'Matrix',
//       tags: [
//         'English',
//         'U/A',
//         '2021',
//         'Si-fi/Action',
//         '2h 28m'
//       ],
//       comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
//     },
//     83 : {
//         image : require('~/assets/images/MatrixHeader.png'),
//         name: '83',
//         tags: [
//           'Hindi',
//           'U/A',
//           '2021',
//           'Si-fi/Action',
//           '2h 28m'
//         ],
//         comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
//     },
//     Saamanyudu : {
//         image : require('~/assets/images/MatrixHeader.png'),
//         name: 'Saamanyudu',
//         tags: [
//           'Telugu',
//           'U/A',
//           '2021',
//           'Si-fi/Action',
//           '2h 28m'
//         ],
//         comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
//     },
//     Pushpa : {
//         image : require('~/assets/images/MatrixHeader.png'),
//         name: 'Pushpa',
//         tags: [
//           'Telugu',
//           'U/A',
//           '2021',
//           'Si-fi/Action',
//           '2h 28m'
//         ],
//         comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
//     },

//   }


export default function MovieDetail({navigation,route}:any) {
  const dispatch = useDispatch()
  const activeState = useSelector((state:any)=>state.langReducer)
  const TimingData = activeState.TheatreData
  let Data = activeState.Data
  const key = route.params.key
  const makeTheatreTimingData = () => {
    let tmpData = []
    for (var i =0 ;i<TimingData.length ; i++){
      tmpData.push({
        title: TimingData[i].name,
        location : TimingData[i].comment,
        data: TimingData[i].timings
      })
    }
    // console.log(tmpData)
    return tmpData
  }
    // console.log(activeState);
    const activeData = Data[key]
    // console.log("activeData: ",activeData)
    // console.log(key)

  return (
    <View style = {styles.body}>
        <Image style = {styles.image} source = {activeData.headImage}/>
        <Ionicon name = 'arrow-back' style = {styles.icon} size={30} color='#fff' onPress={()=>navigation.goBack()} />
        <MovieIntro activeData = {activeData}/>
        <MovieBrief activeData = {activeData}/>
        <MovieDateShow />
        <MovieTimingShow makeTheatreTimingData = {makeTheatreTimingData} keys = {key}/>
        <ModalBottomSheet lang = {activeData.tags[0]} navigation = {navigation}/>
    </View>
  )
}