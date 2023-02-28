import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home} from '../../features/home/view/index'
import {Search} from '../../features/search/view/index'
import { createStackNavigator } from '@react-navigation/stack';
import MyBookings from '~/features/MyBookings/view/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigation(props:any) {
    return (
            <Tab.Navigator
                initialRouteName='Movies'
                screenOptions = {({route})=>({
                tabBarIcon:({focused,color}) => {
                    let iconName ;
                    switch (route.name) {
                    case "Movies":
                        iconName = 'film'
                        break;
                    case "Search":
                        iconName = 'search'
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
                    <Icon name = {iconName} color = {focused?'#8e24aa':'grey'} size={18}/>
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
                    component = {Search}
                    options = {{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name = "My Bookings"
                    component = {MyBookings}
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
    );
}

export default TabNavigation;