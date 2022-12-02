import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, BottomNavigation, Input, BottomNavigationTab, Icon, withStyles } from '@ui-kitten/components'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

import { supabase } from '../supabase'

import type { NavigationDrawerProp2 } from '../Navigations'

export default function Registro({navigation}: NavigationDrawerProp2) {
  
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
    <View style={{flex:1, justifyContent:'space-between'}}>
        <ImageBackground source={require('../assets/Imagenes/bg-login-registro.png')} style={{ flex: 1, justifyContent:'flex-end', padding: 8, backgroundColor: '#E2DFDF' }} >
          <View style={estilos.formulario}>
            <View style={{ flexDirection:'row', justifyContent: 'space-evenly', width: '100%' }}>
              <Button onPress={() => navigation.jumpTo('Login')}>login</Button>
              <Button disabled>Registrarse</Button>
            </View>
            <Text>Aqui van botones!</Text>
            <Text category='h4'>¡Bienvendio a la app!</Text>
            <Input placeholder='E-Mail'style={estilos.inputs} onChangeText={(t) => {setEmail( t )}}/>
            <Input secureTextEntry placeholder='Contraseña'style={estilos.inputs} onChangeText={(t) => {setPassword(t)}} />
            <Button onPress={registro} >Registrarme</Button>
            <Text>¿Olvidaste la contraseña?</Text>
          </View>
        </ImageBackground>
        

    </View>
  )
}

const estilos = StyleSheet.create({
  formulario:{
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
    padding: 20,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 24
  },
  inputs: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: 'white'
  }
})
