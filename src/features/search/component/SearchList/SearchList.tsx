import React from 'react'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { useDispatch , useSelector } from 'react-redux';
import { setSearchReload } from '../../redux/action';
import ListShimmerCard from '../ListShimmerCard/index';
import NotFound from '../NotFound/index';
import { styles } from './style';
import ListSearchData from '../ListSearchData/index';

const MovieData:any = []
const TheatreData: any = []

export default function SearchList() {
  const dispatch = useDispatch();
  const onLoad = useSelector((state:any) => state.searchReducer.searchRefresh)
  const activeFeature = useSelector((state:any)=>state.searchReducer.feature)
  // const onLoad = true;
  const setTrue = () => {
    dispatch(setSearchReload(true))
  }
  const setFalse = () => {
    setTimeout(()=>dispatch(setSearchReload(false)),2000)
  }
  const onRefresh = () => {
    setTrue()
    setFalse()
  }
  const CurrentList = activeFeature === 'Movies' ? MovieData : TheatreData;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing = { onLoad } 
          onRefresh = { onRefresh }
        />
      }
      style = {styles.body}
    >
      {
        onLoad ? 
        <ListShimmerCard />
        :
        (
          CurrentList.length === 0 ?
          <NotFound/>
          :
          <ListSearchData data = {CurrentList}/>
        )
      }
      {/* <ShimmerCard/> */}
    </ScrollView>
  )
}