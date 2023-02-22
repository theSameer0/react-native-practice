import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import HeaderWelcome from '../component/HeaderWelcome/HeaderWelcome';
import DropDown from '../component/DropDown/DropDown';
import LangCheck from '../component/LangCheck/langCheck';
import MovieList from '../component/MovieList/movieList';

export const Home = () => {
    return (
        <View>
            <HeaderWelcome name = "Sameer" />
            <DropDown active='Banglore' />
            <LangCheck />
            <MovieList />
        </View>
    )
}
