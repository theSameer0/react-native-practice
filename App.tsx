import React from 'react'
import {
  processColor,
  Text,
  View,
   
} from 'react-native'
import TabNavigation from './src/component/tabNavigation';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';


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
