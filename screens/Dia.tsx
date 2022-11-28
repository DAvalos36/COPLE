import React, {useEffect, useState} from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, Calendar, Modal, Card,Input, ButtonGroup } from '@ui-kitten/components'

import { supabase } from '../supabase'

import { Calendario_Notas } from '../types'

type Props = {}

export default function Dia({}: Props) {
  let uuid = ''

  const [notas, setNotas] = useState<Calendario_Notas[]>([])

  const [cargando, setCargando] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [fecha, setFecha] = useState<Date>(new Date())

  const [nota, setNota] = useState('')
  const [animo, setAnimo] = useState(0)

  const cargarNotas = async () => {

    const info = await supabase
    .from('COUPLE_Calendario_Notas')
    .select('*')
    .eq('usuario', uuid)

    const notas = info.data as Calendario_Notas[]
    
    
  }

  const cargarInfoUsuario = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    user?.id && (uuid = user.id)
    console.log('uuid: ', uuid)

    cargarNotas()
  }

  const seleccionarFecha = (fecha: Date) => {
    setFecha(fecha)
    setModalVisible(true)

  }

  const crearNota = async () => {

    // alert('entra')
    console.log('entra')
    setCargando(true)
    
    const { data, error } = await supabase
    .from('COUPLE_Calendario_Notas')
    .insert([
      { fecha, animo, nota, usuario: uuid  },
    ])

    if(error){
      alert('Ocurru un error al crear la nota')
      console.log(error)
    }
    if (data !== null) {
      alert('Nota creada')
      console.log(data) 
    }

    setAnimo(0)
    setNota('')
    setCargando(false)
  }

  useEffect(() => {
    cargarInfoUsuario()
  }, [])
  

  return (
    <View style={{flex:1}}>

        <Modal
          visible={modalVisible}
          backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onBackdropPress={() => {}}>
          <Card disabled={true} style={{ flex:1, alignItems:'center' }}>
            <Text category='h5'>Registrar nota</Text>
            <Text>¿Como te sientes?</Text>
            <ButtonGroup size='giant' style={{ marginVertical: 10, justifyContent: 'space-around', borderWidth: 0 }} appearance='outline' status='basic'>
              <Button onPress={ () => setAnimo(1)}>😔</Button>
              <Button onPress={ () => setAnimo(2)}>😐</Button>
              <Button onPress={ () => setAnimo(3)}>😊</Button>
            </ButtonGroup>
            <Text>Escribe lo que sientes:</Text>
            <Input
              value={nota}
              multiline={true}
              textStyle={{ minHeight: 64 }}
              placeholder='¿Como va tu día? :D'
              style={{ marginVertical: 15}}
              onChangeText={t => setNota(t)}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button onPress={ crearNota }>
                Enviar
              </Button>
              <Button onPress={() => {setModalVisible(false)}} disabled={cargando}>
                Cancelar
              </Button>
            </View>
          </Card>
        </Modal>


        <Text>Pantalla de Dia aqui</Text>
        <Calendar 
          date={new Date()}
          onSelect={(f) => seleccionarFecha(f) }
        />
    </View>
  )
}
