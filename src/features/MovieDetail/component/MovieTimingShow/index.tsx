import { 
    View, 
    Text,
    FlatList,
    Pressable,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import TimeBoxShow from '../TimeBoxShow'
import { useDispatch, useSelector } from 'react-redux'
import {getAvailableShow} from '../../redux/services'
import axios from 'axios'
import { setAvailShow } from '../../redux/action'


export const MovieTimingShow = ({Id}:any) => {
  const bookingData = useSelector((state:any)=>state.movieReducer)
  const langState = useSelector((state:any)=>state.langReducer)
  const theatreList = langState.TheatreData;
  const [date,setDate] = useState('13-3-2023');
  const dateUpdate = () => {
    let curDate = new Date();
    curDate.setDate(curDate.getDate()+bookingData.bookingDate+1) 
    let date = curDate.getDate().toString()+'-'+(curDate.getMonth()+1).toString()+'-'+curDate.getFullYear();
    setDate(date);
  }
  useEffect(()=>{
    dateUpdate();
    getAvailableShow(Id,date,dispatch);
    console.log("executed")
  },[bookingData.bookingDate])
  const makeTheatreTimingData = () =>{
    let finalList: any = []
    // console.log("availShow: ",availShow)
    for (var i in availShow) {
      let isFound: Boolean = false;
      for (var j in finalList){
        if (availShow[i].theatreId == finalList[j].id){
          finalList[j].time.push({
            timing:availShow[i].timing,
            seats:availShow[i].seats
          });
          isFound = true;
          break;
        }
      }
      // console.log("availshow[i]:",availShow[i])
      if(!isFound){
      var theatreName: string;
      var theatreLocation: string;
      // console.log("theatreList: ",theatreList)
      for (var k in theatreList) {
        // console.log(availShow[i].theatreId.trim(),"print:", theatreList[k].id.trim())
        if(availShow[i].theatreId == theatreList[k].id){
          theatreName = theatreList[k].name;
          theatreLocation = theatreList[k].location;
            let tmp = {
              id: availShow[i].theatreId,
              title: theatreName,
              location: theatreLocation,
              movieId: availShow[i].movieId,
              data: availShow[i].date,
              time: [{
                timing:availShow[i].timing,
                seats:availShow[i].seats,
              }],
            }
            finalList.push(tmp)
            break;
          }
        }
      }
    }
    // console.log("print finalList: ",finalList)
    return finalList;
  }
    // const dispatch = useDispatch();
    const dispatch  = useDispatch();
    const availShow = bookingData.availShow;
    return (
      // <View></View>
      <FlatList 
          data={makeTheatreTimingData()}
          keyExtractor = {(item,index) => index.toString()}
        showsVerticalScrollIndicator = {false}
        // horizontal
        // contentContainerStyle = {{paddingHorizontal : 10}
        renderItem = {
          ({item})=>(
            <>
              {/* {console.log("hey",item)} */}
              <TimeBoxShow item = {item} Id = {Id} theatreId = {item.id} date = {date}/>
            </>
          )
        }
      />
  )
}