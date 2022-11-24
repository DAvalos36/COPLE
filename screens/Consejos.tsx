import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, Layout, List, ListItem, Avatar } from '@ui-kitten/components'

interface datosLista {
  titulo: string,
  descripcion: string,
  imagen: string
}
const datos:datosLista[] = [
  {titulo: 'Identifica', descripcion: 'Descripcion 1', imagen: '../assets/Imagenes/indentificaIcono.png'},
  {titulo: 'Conoce', descripcion: 'Descripcion 1', imagen: '../assets/Imagenes/conoceIcono.png'},
  {titulo: 'Previene', descripcion: 'Descripcion 1', imagen: '../assets/Imagenes/previeneIcono.png'},
  {titulo: 'Concentrate', descripcion: 'Descripcion 1', imagen: '../assets/Imagenes/concentrateIcono.png'},
  {titulo: 'Acepta', descripcion: 'Descripcion 1', imagen: '../assets/Imagenes/aceptaIcono.png'},


]

type Props = {}

export default function Consejos({}: Props) {

  const logoIzquierda = ({a, props}: any) => ( 
    <Avatar {...props} style={{margin: 8}} size='giant' source={require('../assets/Imagenes/bocina.png')} />
  );

  const renderItem = ({ item, index }: {item:datosLista, index: number }) => (
    <ListItem 
      title={<Text category='h3'>{item.titulo}</Text>} 
      description={item.descripcion}
      accessoryLeft={logoIzquierda}
      />
  );


  return (
    <Layout style={{flex:1}}>
        <List data={datos} renderItem={renderItem} />
    </Layout>
  )
}
