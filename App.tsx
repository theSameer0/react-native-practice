import React , { useEffect } from 'react'
import {
  processColor,
  Text,
  View,
   
} from 'react-native'
import TabNavigation from './src/component/tabNavigation';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import movieDataUpdate from '~/features/home/redux/services';
// import getMovies from '~/api/modal/fetchData';

// useEffect(() => {
//   getMovies()
// }, [])

const App = () => {
  return (
    <Provider store = {Store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
