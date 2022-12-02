import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Text} from '@ui-kitten/components'
import { supabase } from '../supabase'

type Props = {}

interface Consejo {
  id: number
  fecha: string
  titulo: string
  consejo: string
}

const ConsejoDia = (props: Props) => {
  const [consejo, setConsejo] = useState<Consejo | null>(null)

  const Header = (titulo: string) => (
    <View {...props}>
      <Text category='h6'>{titulo}</Text>
    </View>
  );

  const cargarConsejo =async () => {
    const hoy = new Date()
    const formatoFecha = `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDate()}`
    let { data: COUPLE_Consejo_Dia, error } = await supabase
    .from('COUPLE_Consejo_Dia')
    .select("*")

    // Filters
    .eq('fecha', formatoFecha)

    if (error !== null) {
      console.log(error)
    }
    console.log('====================================');
    console.log(COUPLE_Consejo_Dia)
    const info  = COUPLE_Consejo_Dia as Consejo[]
    setConsejo(info[0])
    console.log('====================================');
  }

  useEffect(() => {
    void cargarConsejo()
  }, [])
  
  return (
    <Card header={Header('Consejo del día')}>
      <Text category='c1' >{consejo?.consejo}</Text>
    </Card>
  )
}

export default ConsejoDia

const styles = StyleSheet.create({})