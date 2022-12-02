import React, {useEffect, useState, useRef} from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, Calendar, Modal, Card,Input, ButtonGroup, StyleType, Layout } from '@ui-kitten/components'

import { supabase } from '../supabase'

import { Calendario_Notas } from '../types'
import ConsejoDia from '../components/ConsejoDia'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {}


const buscar = (fe: Date, Arreglo: Calendario_Notas[]): false | Calendario_Notas => {

  
  let fin: Calendario_Notas | false = false
  for(let i = 0; i < Arreglo.length; i++){
    let fecha2 = `${fe.getFullYear()}-${fe.getMonth() + 1}-${fe.getDate()}`
    console.log(`Pos arreglo: ${i}, fecha: ${Arreglo[i].fecha}, fecha buscada: ${fecha2}`)
    if (fecha2 == Arreglo[i].fecha) {
      return Arreglo[i]
      break
    }
  }

  return false;
};




export default function Dia({}: Props) {
  // let uuid = 'a'
  const uuid = useRef('a')

  const [notas, setNotas] = useState<Calendario_Notas[]>([])
  const [notaMostar, setNotaMostar] = useState<Calendario_Notas>()

  const [calendarioCargado, setCalendarioCargado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [modalCrearVisible, setModalCrearVisible] = useState(false)
  const [modalVerVisible, setModalVerVisible] = useState(false)
  const [fecha, setFecha] = useState<Date>(new Date())

  const [nota, setNota] = useState('')
  const [animo, setAnimo] = useState(0)

  const DayCell = ({ date }: {date: Date}, style: StyleType) => (
    <View
      style={[stylesDia.dayContainer, style.container]}>
      <Text style={[style.text, buscar(date, notas ) !== false ? {color: 'red'} : {} ]}>{`${date.getDate()}`}</Text>
    </View>
  );

  const cargarNotas = async () => {

    const info = await supabase
    .from('COUPLE_Calendario_Notas')
    .select('*')
    .eq('usuario', uuid.current)

    const notas = info.data as Calendario_Notas[]
    setNotas(notas)
    setCalendarioCargado(true)
    console.log(notas)
    
    
  }

  const cargarInfoUsuario = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    user?.id && (uuid.current = user.id)
    console.log('uuid: ', uuid)

    cargarNotas()
  }

  const seleccionarFecha = (fecha: Date) => {
    const res = buscar(fecha, notas)
    if( res !== false){
      setNotaMostar(res)
      setModalVerVisible(true)
    }
    else{
      setModalCrearVisible(true)
      setFecha(fecha)
    }
  }

  const crearNota = async () => {

    // alert('entra')
    console.log('entra')
    setCargando(true)
    
    const { data, error } = await supabase
    .from('COUPLE_Calendario_Notas')
    .insert([
      { fecha, animo, nota, usuario: uuid.current  },
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
    <ScrollView style={stylesDia.container}>

        {/* Modal Ver nota */}
        <Modal
          visible={modalVerVisible}
          backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onBackdropPress={() => {}}>
          <Card disabled={true} style={{ flex:1, alignItems:'center' }}>
            <Text category='h5' >Nota del dia</Text>
            {notaMostar?.animo === 1 && <Text style={{ justifyContent: 'center' }}>😔</Text>}
            {notaMostar?.animo === 2 && <Text style={{ justifyContent: 'center' }}>😐</Text>}
            {notaMostar?.animo === 3 && <Text style={{ justifyContent: 'center' }}>😊</Text>}
            <Text>Escribe lo que sientes:</Text>
            <Text >{notaMostar?.nota}</Text>
            <Button onPress={() => {setModalVerVisible(false)}}>Cancelar</Button>
          </Card>
        </Modal>

        {/* Modal crear nota */}
        <Modal
          visible={modalCrearVisible}
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
              <Button onPress={() => {setModalCrearVisible(false)}} disabled={cargando}>
                Cancelar
              </Button>
            </View>
          </Card>
        </Modal>


        {/* <Text>Pantalla de Dia aqui</Text> */}
        <ConsejoDia />
        {calendarioCargado && (
          <View style={{alignItems:'center', paddingVertical: 10}}>
            <Calendar 
              date={new Date()}
              renderDay={DayCell}
              onSelect={(f) => seleccionarFecha(f) }
            />
          </View>
        )}
    </ScrollView>
  )
}

const stylesDia = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#FFF'
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  value: {
    fontSize: 12,
    fontWeight: '400',
  },
});
