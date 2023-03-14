import { 
    View, 
    Text,
    Image,
} from 'react-native'
import React, { useEffect } from 'react'
import {styles} from './style'
import Ionicon from 'react-native-vector-icons/Ionicons'
// import {Data as TimingData} from '../../home/component/TheatreList/TheatreList'
import { useDispatch,useSelector } from 'react-redux'
import MovieIntro from '../component/MovieIntro/index'
import MovieDateShow from '../component/MovieDateShow/index'
import {MovieTimingShow} from '../component/MovieTimingShow/index'
import ModalBottomSheet from '../component/ModalBottomSheet'
import MovieBrief from '../component/MovieBrief'
import { MovieData } from '~/features/home/redux/interface'
import { makeSeatAvail } from '../redux/services'

export default function MovieDetail({navigation,route}:any) {
  const activeState = useSelector((state:any)=>state.langReducer)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   makeSeatAvail(dispatch);
  // }, [])
  let Data = activeState.Data
  const Id = route.params.id
    let activeData;
    for (var i in Data) {
      if (Data[i].id == Id) {
        activeData = Data[i];
      }
    }
  return (
    <View style = {styles.body}>
        <Image style = {styles.image} source = {{uri:activeData.headImage}}/>
        <Ionicon name = 'arrow-back' style = {styles.icon} size={30} color='#fff' onPress={()=>navigation.goBack()} />
        <MovieIntro activeData = {activeData}/>
        <MovieBrief activeData = {activeData}/>
        <MovieDateShow />
        <MovieTimingShow  Id = {Id}/>
        <ModalBottomSheet lang = {activeData.tags[0]} navigation = {navigation}/>
    </View>
  )
}