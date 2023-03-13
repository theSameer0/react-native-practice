import React, { useEffect } from 'react'
import {
    View,
    Text,
} from 'react-native'
import { createStackNavigator, Header } from '@react-navigation/stack'
import { create } from 'react-test-renderer';
import StackHome from '../component/StackHome/StackHome';
import MovieDetail from '../../MovieDetail/view/index';
import App from '../redux/services';
import { useSelector } from 'react-redux';
import InitialCall from '../redux/services';

// useEffect(() => {
//     movieDataUpdate()
//   }, [])
  


const Stack = createStackNavigator();
export const Home = () => {
    InitialCall();
    return (
        <Stack.Navigator
            initialRouteName='Movies2'
        >
            <Stack.Screen
                name = "Movies2"
                component={StackHome}
                options = {{
                    headerShown : false
                }}
                />
            <Stack.Screen
                name = "MovieDetail"
                component={MovieDetail}
                options = {{
                    headerShown : false
                }}
            />
        </Stack.Navigator>
            
    )
}
