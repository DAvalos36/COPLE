import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';


//Aqui van a estar las pantallas
import Login from './screens/Login';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
           <Tab.Screen name="Inicio" component={Login} />
            {/* <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}
