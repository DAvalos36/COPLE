import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, BottomNavigation, Input, BottomNavigationTab, Icon, withStyles } from '@ui-kitten/components'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

import { supabase } from '../supabase'


type Props = {
  navigation: BottomTabBarButtonProps
}


const PersonIcon = () => (
  <Icon name='person-outline'/>
);

const BellIcon = () => (
  <Icon name='bell-outline'/>
);

const EmailIcon = () => (
  <Icon name='email-outline'/>
);


export default function Registro({navigation}: Props) {
  
  // const bottomState = useBottomNa

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [loading, setLoading] = React.useState(false)

  const registro = async () => {
    setLoading(true)
    supabase.auth.signUp({email, password}).then(({data, error}) => {
      setLoading(false)
      if (error) {
        alert(error.message)
      } else {
        alert('Usuario creado')
      }
    })
  }
  
  return (
    <View style={{flex:1, justifyContent:'space-between', padding: 8}}>
        <Text>Pantalla de Login aqui</Text>
        <View style={estilos.formulario}>
          <Text>Aqui van botones!</Text>
          <Text category='h4'>¡Bienvendio a la app!</Text>
          <Input placeholder='E-Mail'style={estilos.inputs} onChangeText={(t) => {setEmail( t )}}/>
          <Input placeholder='Contraseña'style={estilos.inputs} onChangeText={(t) => {setPassword(t)}} />
          <Button onPress={registro} >Registrarme</Button>
          <Text>¿Olvidaste la contraseña?</Text>
        </View>
        

    </View>
  )
}

const estilos = StyleSheet.create({
  formulario:{
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 40,
    padding: 20,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  inputs: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: 'white'
  }
})
