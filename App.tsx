import React from 'react'
import {
  processColor,
  Text,
  View,
   
} from 'react-native'
import TabNavigation from './src/component/tabNavigation';
import { Provider } from 'react-redux';
import { Store } from './src/features/home/redux/store';


const App = () => {
  return (
    <Provider store = {Store}>
      <TabNavigation />
    </Provider>
  )
}

export default App;
