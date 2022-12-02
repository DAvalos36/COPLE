import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,  } from '@react-navigation/native';
import { supabase } from './supabase';


//Aqui van a estar las pantallas
import Login from './screens/Login';
import Registro from './screens/Registro';
import Inicio from './screens/Inicio';
import Multimedia from './screens/Multimedia';
import Dia from './screens/Dia';

import { StackConsejo } from './navigation/StackConsejo';

// Interfaces
import { pantallaConsejos } from './types'

export type parametrosPantalla = {
    Inicio: undefined,
    Login: undefined,
    Consejos: undefined,
    Multimedia: undefined,
    Dia: undefined,
    Noshe: undefined
    Registro: undefined
    C2: undefined
}

const Tab = createBottomTabNavigator<parametrosPantalla>();
const Drawer = createDrawerNavigator<parametrosPantalla>();


const Tabs = () => {
    const [cargando, setCargando] = useState<boolean>(true)
    const [login, setLogin] = useState<boolean>(false)


    const cargarInfoUsuario = async () => {
        const { data: { user } } = await supabase.auth.getUser()

        if(user !== null) {
            setLogin(true)
            console.log(user.id)
        }
        setCargando(false)
    }

    useEffect(() => {
        cargarInfoUsuario()

        supabase.auth.onAuthStateChange((event, session) => {
            if(session){
                if(session.user !== undefined){
                    console.log(session.user.id)
                    setLogin(session != null)
                }
                else{
                    setLogin(false)
                }
            }
            else {
                setLogin(false)
            }
        })
    }, [])
    

    return (
        <Drawer.Navigator>
            {!login ? (
            <>
                <Drawer.Screen name="Inicio" component={Inicio} 
                    options={{
                        // Oculta la cabecera
                        headerShown: false, 
                        // Oculta la barra de navegacion
                    }} 
                />
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Registro" component={Registro}/>
            </>
            ):(
            <>
                <Drawer.Screen name="Dia" component={Dia}/>


                <Drawer.Screen name='Multimedia' component={Multimedia} />
                <Drawer.Screen name="Consejos" component={StackConsejo}/>
            </>
            )}
        </Drawer.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}
