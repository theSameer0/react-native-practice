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
    let date = new Date();
    date.setDate(date.getDate());
    console.log(date);
    for (var j=0;j<7;j++){
      Day.push({
        date: date.getDate(),
        month: Months[date.getMonth()],
        day: WeekDays[date.getDay()]
      })
      date.setDate(date.getDate()+1);
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
        showsHorizontalScrollIndicator = {false}
        renderItem = {
            ({item,index}) => (
                <DateShow currentData = {item} index = {index}/>
            )
        }
        style = {styles.dayBar}
    />
  )
}