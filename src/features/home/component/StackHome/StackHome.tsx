import { View, Text, Pressable } from 'react-native'
import React from 'react'
import HeaderWelcome from '../HeaderWelcome/HeaderWelcome';
import DropDown from '../DropDown/DropDown';
import LangCheck from '../LangCheck/langCheck';
import MovieList from '../MovieList/movieList';
import TheatreList from '../TheatreList/TheatreList';

export default function StackHome({navigation}) {
  return (
    <View>
        <HeaderWelcome name = "Sameer" />
        <LangCheck />
        <MovieList navigation={navigation}/>
        <TheatreList />
    </View>
  )
}