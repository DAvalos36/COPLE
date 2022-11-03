import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text } from '@ui-kitten/components'
import  { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'


import { parametrosPantalla } from '../Navigations' 
// import img from '../assets/Imagenes/inicio.jpg';
const imagen = { uri: "https://reactjs.org/logo-og.png" };

type propsPantall = BottomTabNavigationProp<parametrosPantalla, 'Inicio'>
type Props = {
    navigation: propsPantall
}

export default function Inicio({navigation}: Props) {
  return (
    <View style={{flex:1}}>
        <ImageBackground source={require('../assets/Imagenes/inicio.jpg')} resizeMode="cover" style={estilos.imagen} >
            <Button size='giant' style={estilos.boton}
                onPress={() => navigation.navigate('Login')}
            >
                Iniciar Sesión
            </Button>
            <View style={estilos.row}>    
                <Text status='control' >
                    ¿No tienes cuenta? 
                </Text>
                <Text status='control' >
                    Registrate
                </Text>
            </View>
        </ImageBackground>
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagen: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20,
    },
    boton: {
        borderRadius: 30,
        width: 270,
        backgroundColor: '#39f9e2ad',
        borderColor: '#39F9E2',
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})