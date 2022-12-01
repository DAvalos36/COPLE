import React from 'react'
import { ImageBackground, View, StyleSheet, ScrollView } from 'react-native'
import { Button, Layout, Text, Avatar } from '@ui-kitten/components'


import { StackConsejosScreenProps } from '../navigation/StackConsejo'

enum tipo {
  identifica = '../assets/Imagenes/indentificaIcono.png',
  conoce = '../assets/Imagenes/conoceIcono.png',
  previene = '../assets/Imagenes/previeneIcono.png',
  concentrate = '../assets/Imagenes/concentrateIcono.png',
  acepta = '../assets/Imagenes/aceptaIcono.png'
}

export default function Consejo({route}: StackConsejosScreenProps) {
  const info = route.params
  return (
    <ScrollView style={estilos.contenedor}>
        <View style={estilos.header}>
          {(info.tipo === 'acepta') && <Avatar source={require('../assets/Imagenes/aceptaIcono.png')} size='giant'/> }
          {(info.tipo === 'concentrate') && <Avatar source={require('../assets/Imagenes/concentrateIcono.png')} size='giant'/> }
          {(info.tipo === 'conoce') && <Avatar source={require('../assets/Imagenes/conoceIcono.png')} size='giant'/> }
          {(info.tipo === 'identifica') && <Avatar source={require('../assets/Imagenes/indentificaIcono.png')} size='giant'/> }
          {(info.tipo === 'previene') && <Avatar source={require('../assets/Imagenes/previeneIcono.png')} size='giant'/> }
          
        </View>
        <View style={estilos.body}>
          <Text category='h5'>{info.titulo}</Text>
          <Text>{info.contenido}</Text>
        </View>
        {/* <Text>Pantalla de Consejos aqui</Text> */}
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flex: 2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 8,
    // backgroundColor: 'blue',
    alignItems: 'center',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'space-around',
    marginVertical: 10
  }

});
