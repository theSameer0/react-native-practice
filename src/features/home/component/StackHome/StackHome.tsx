import { View, Text, Pressable } from 'react-native'
import React from 'react'
import HeaderWelcome from '../HeaderWelcome/HeaderWelcome';
import DropDown from '../DropDown/DropDown';
import LangCheck from '../LangCheck/langCheck';
import MovieList from '../MovieList/movieList';
import TheatreList from '../TheatreList/TheatreList';
import { styles } from './style'

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