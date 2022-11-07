import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, Layout, List, ListItem, Avatar } from '@ui-kitten/components'

interface datosLista {
  titulo: string,
  descripcion: string,
  imagen: 'audios' | 'videos' | 'imagenes' | 'documentos'
}
const datos:datosLista[] = [
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'audios'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'documentos'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'documentos'},
  {titulo: 'Item 1', descripcion: 'Descripcion 1', imagen: 'documentos'},


]

type Props = {}

export default function Multimedia({}: Props) {

  const logoIzquierda = (props: any) => ( 
    <Avatar {...props} style={{margin: 8}} size='giant' source={require('../assets/Imagenes/bocina.png')} />
  );

  const renderItem = ({ item, index }: {item:datosLista, index: number }) => (
    <ListItem 
      title={`${item.titulo} #${index + 1}`} 
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
