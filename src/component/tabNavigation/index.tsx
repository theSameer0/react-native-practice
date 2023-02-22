import React from 'react';
import {
    View,
    Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home} from '../../features/home/view/index'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator();


function TabNavigation(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Movies"
                screenOptions = {({route})=>({
                tabBarIcon:({focused,color}) => {
                    let iconName ;
                    switch (route.name) {
                    case "Movies":
                        iconName = 'film'
                        break;
                    case "Search":
                        iconName = 'bicycle'
                        break;
                    case "My Bookings":
                        iconName = 'business-time'
                        break;
                    case "Account":
                        iconName='user'
                        break;
                    
                    default:
                        break;
                    }
                    return (
                    <Icon name = {iconName} color = {focused?'#8e24aa':''} size={18}/>
                    )
                }
                })}
                tabBarOptions = {{
                    activeTintColor : '#8e24aa',
                    inactiveTintColor : '#555',
                    headerShown : false,
                }}
                
            >
                
                <Tab.Screen 
                    name = "Movies"
                    component = {Home}
                    options = {{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name = "Search"
                    component = {Home}
                    options = {{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name = "My Bookings"
                    component = {Home}
                    options = {{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name = "Account"
                    component = {Home}
                    options = {{
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigation;