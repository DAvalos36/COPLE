import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer,  } from '@react-navigation/native';


//Aqui van a estar las pantallas
import Login from './screens/Login';
import Consejos from './screens/Consejos';
import Inicio from './screens/Inicio';

export type parametrosPantalla = {
    Inicio: undefined,
    Login: undefined,
    Consejos: undefined
}

const Tab = createBottomTabNavigator<parametrosPantalla>();

const Tabs = () => {
    return (
        <Tab.Navigator
        
        >
           <Tab.Screen name="Inicio" component={Inicio} 
              options={{
                // Oculta la cabecera
                headerShown: false, 
                // Oculta la barra de navegacion
                tabBarStyle: {
                    display: 'none'
                }
            }}
           />
            <Tab.Screen name="Login" component={Login}/>


            <Tab.Screen name="Consejos" component={Consejos}
                options={{
                    headerShown: false,
                }}
            />
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
