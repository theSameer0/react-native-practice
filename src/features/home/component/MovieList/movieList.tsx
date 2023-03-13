import { 
    Text, 
    View,
    FlatList,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomView from '../CustomView/CustomView'
import CustomHeader from '../CustomHeader/CustomHeader'
import {styles} from './style'
import { useSelector } from 'react-redux'
import { MovieData } from '../../redux/interface'
import axios from 'axios'

export default function MovieList({navigation,route}:any) {
    const Data = useSelector((state:any)=>state.langReducer.Data)
    const lang = useSelector((state:any)=>state.langReducer.lang)
    // console.log(Data)
    // const [movieList, setMovieList] = useState<MovieData[]>()
    // useEffect(() => {
    //     let tmpMovieList: MovieData[] = [];
    //     const baseURL = "http://192.168.0.119:8080";
    //     axios.get(`${baseURL}/movies`)
    //     .then(
    //     (response) => {
    //         var Data = response.data;
    //         for ( var inData in Data) {
    //             var tmpMovie: MovieData = {
    //                 key: Data[inData].key,
    //                 name: Data[inData].name,
    //                 language: JSON.parse(Data[inData].language),
    //                 image: JSON.parse(Data[inData].image),
    //                 headImage : Data[inData].headImage,
    //                 tags: Data[inData].tags,
    //                 comment: Data[inData].comment
    //             }
    //             tmpMovieList.push(tmpMovie)
    //         }
    //         setMovieList(tmpMovieList)
    //         console.log(Data)
    //     })
    //     .catch((err)=>console.log(err))
    // }, [])
    
    return (
    <View style = {styles.body}>
        <CustomHeader title="Movies"/>
        <FlatList 
            data={Data.filter((data:any)=>(data.language == lang || lang == 'All'))}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(item,index)=>index.toString()}
            renderItem = {
                ({item})=> <CustomView item = {item} navigation={navigation}/>
            }
        />
    </View>
  )
}
