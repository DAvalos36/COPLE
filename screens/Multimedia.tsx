import React, {useEffect, useState} from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, Layout, List, ListItem, Avatar } from '@ui-kitten/components'
import { Audio } from 'expo-av';


import { supabase } from '../supabase'
interface datosLista {
  id: number,
  created_at: string,
  titulo: string,
  tipo: 1 | 2 | 3 | 4 ,
  descripcion: string,
  "link-O-texto": string
}
const datos:datosLista[] = [
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo:1 , "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo: 2, "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo: 2, "link-O-texto": ''},
  { id: 2, created_at: '2',titulo: 'Item 1', descripcion: 'Descripcion 1', tipo: 2, "link-O-texto": ''},


]

type Props = {}


export default function Multimedia({}: Props) {

  const [info, setInfo] = useState<datosLista[]>([])

  const audio = async (link: string) => {
  const sound = new Audio.Sound();
  await sound.loadAsync({
    uri: link
  })

  await sound.playAsync()

    
  }

  const cargarDatos = async () => {
    
    console.log('Cargando datos')

    let { data: COUPLE_Multimedia, error } = await supabase
    .from('COUPLE_Multimedia')
    .select('*')

    console.log(COUPLE_Multimedia)
    setInfo(COUPLE_Multimedia as datosLista[])
  }

  useEffect(() => {
    cargarDatos()
  }, [])
  

  const logoBocina = (props: any) => ( 
    <Avatar {...props} style={{margin: 8}} size='giant' source={require('../assets/Imagenes/bocina.png')} />
  );
  const logoTexto = (props: any) => ( 
    <Avatar {...props} style={{margin: 8}} size='giant' source={require('../assets/Imagenes/texto.png')} />
  );

  const renderItem = ({ item, index }: {item:datosLista, index: number }) => (
    <ListItem 
      title={`${item.titulo} #${index + 1}`} 
      description={item.descripcion}
      {...item.tipo === 2 ? { accessoryLeft: logoBocina } : { accessoryLeft: logoTexto }}
      {...item.tipo === 2 ? { onPress: () => audio(item["link-O-texto"]) } : { onPress: () => console.log('Texto') }}
      />
  );


  return (
    <Layout style={{flex:1}}>
      {info.length !== 0 ? (
        <List data={info} renderItem={renderItem} />
      ) : ( 
        <Text>Cargando... {info.length}</Text>
      )}
    </Layout>
  )
}
