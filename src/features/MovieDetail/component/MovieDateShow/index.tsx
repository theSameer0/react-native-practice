import { 
    Text,
    FlatList 
} from 'react-native'
import React from 'react'
import DateShow from '../DateShow';
import { styles } from './style';


const WeekDays = [
    'SUN','MON','TUE','WED','THUR','FRI','SAT'
];
const Months = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'
]

const listDay = () => {
    let Day = []
    let day = new Date().getDay();
    let date = new Date();
    // console.log(date);
    for (var i=day,j=0;j<7;j++){
      Day.push({
        date: date.getDate(),
        month: Months[date.getMonth()],
        day: WeekDays[i]
      })
      date.setDate(date.getDate()+1);
      i = (i+1)%7;
    }
    Day[0].day = 'TODAY'
    Day[1].day = 'TOMO'
    return Day
}

export default function MovieDateShow() {
  return (
    <FlatList 
        data = {listDay()}
        keyExtractor = {(item,index) => index.toString()}
        horizontal
        renderItem = {
            ({item,index}) => (
                <DateShow currentData = {item} index = {index}/>
            )
        }
        style = {styles.dayBar}
    />
  )
}