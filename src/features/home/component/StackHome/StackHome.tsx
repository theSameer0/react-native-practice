import { View, Text, Pressable } from 'react-native'
import React, { useDebugValue, useEffect } from 'react'
import HeaderWelcome from '../HeaderWelcome/HeaderWelcome';
import DropDown from '../DropDown/DropDown';
import LangCheck from '../LangCheck/langCheck';
import MovieList from '../MovieList/movieList';
import TheatreList from '../TheatreList/TheatreList';
import { styles } from './style'
import App from '../../redux/services';
import axios from 'axios';
import { MovieData } from '../../redux/interface';
import { setMovieData } from '../../redux/action';
import { useDispatch } from 'react-redux';

export default function StackHome({navigation,route}:any) {

  return (
    <View style = {styles.body}>
        <HeaderWelcome name = "Sameer" />
        <LangCheck navigation = {navigation} />
        <MovieList navigation={navigation} route = {route}/>
        <TheatreList />
    </View>
  )
}

function dispatch(arg0: { type: string; payload: MovieData[]; }) {
  throw new Error('Function not implemented.');
}
