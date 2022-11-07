import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Layout, Text, Avatar } from '@ui-kitten/components'


import { pantallaConsejos } from '../types'

enum tipo {
  identifica = '../assets/Imagenes/indentificaIcono.png',
  conoce = '../assets/Imagenes/conoceIcono.png',
  previene = '../assets/Imagenes/previeneIcono.png',
  concentrate = '../assets/Imagenes/concentrateIcono.png',
  acepta = '../assets/Imagenes/aceptaIcono.png'
}

export default function Consejo({}: pantallaConsejos) {
  return (
    <Layout style={estilos.contenedor}>
        <View style={estilos.header}>
          <Avatar 
            source={require('../assets/Imagenes/aceptaIcono.png')} 
            size='giant'  
          />
        </View>
        <View style={estilos.body}>
          <Text category='h5'>¿Titulo aqui?</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque voluptatibus officiis. Distinctio sunt fuga molestias ea officia, ipsum consequatur repellat, eum reiciendis consequuntur mollitia sequi nesciunt? Nihil, modi ducimus?</Text>
        </View>
        {/* <Text>Pantalla de Consejos aqui</Text> */}
    </Layout>
  )
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10
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
    justifyContent: 'space-around'
  }

});
