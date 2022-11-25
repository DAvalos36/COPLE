import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer,  } from '@react-navigation/native';
import { supabase } from './supabase';


//Aqui van a estar las pantallas
import Login from './screens/Login';
import Consejos from './screens/Consejos';
import Inicio from './screens/Inicio';
import Multimedia from './screens/Multimedia';
import Dia from './screens/Dia';

// Interfaces
import { pantallaConsejos } from './types'

export type parametrosPantalla = {
    Inicio: undefined,
    Login: undefined,
    Consejos: undefined,
    Multimedia: undefined,
    Dia: undefined,
    Noshe: undefined
}

const Tab = createBottomTabNavigator<parametrosPantalla>();


const Tabs = () => {
    const [login, setLogin] = useState<boolean>(supabase.auth.getUser() != null)

    supabase.auth.onAuthStateChange((event, session) => {
        setLogin(session != null)
    })


    return (
        <Tab.Navigator>
            {login ? (
            <>
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
            </>
            ):(
            <>
                <Tab.Screen name="Dia" component={Dia}/>


                <Tab.Screen name='Multimedia' component={Multimedia} />
                <Tab.Screen name="Consejos" component={Consejos}/>
            </>
            )}
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
