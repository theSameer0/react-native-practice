import { 
    Text, 
    View 
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchBar from '../component/SearchBar/SearchBar'
import OptionBar from '../component/OptionBar/OptionBar'
import SearchList from '../component/SearchList/SearchList'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'

const Tab = createMaterialTopTabNavigator();

export function Search() {
  return (
    <View style = {styles.body}>
      {/* <View style = {styles.header}> */}
        <SearchBar />
        <OptionBar />
      {/* </View> */}
        <SearchList />
    </View>
  )
}