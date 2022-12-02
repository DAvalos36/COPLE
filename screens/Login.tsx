import React, { useState } from 'react'
import { ImageBackground, View, StyleSheet, ImageBackgroundComponent } from 'react-native'
import { Button, Text, BottomNavigation, Input, BottomNavigationTab, Icon, Spinner } from '@ui-kitten/components'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

import { supabase } from '../supabase'

import type { NavigationDrawerProp } from '../Navigations'


export default function Login({navigation}: NavigationDrawerProp) {
  const [cargando, setCargando] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const iniciarSesion = () => {
    setCargando(true)
    supabase.auth.signInWithPassword({email, password}).then((response) => {
      if(response.error) {
        alert(response.error.message)
      }
      else {
        alert('Usuario logueado')
        console.log(response)
      }
    }).catch((error) => {
      console.log(error)
    })
    setCargando(false)
  
  }
  
  const LoadingIndicator = (props: any) => (
    <View style={[props.style]}>
      <Spinner size='small'/>
    </View>
  );
  
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/Imagenes/bg-login-registro.png')} style={{ flex: 1, justifyContent:'flex-end', padding: 8, backgroundColor: '#E2DFDF' }} >
        <View style={estilos.formulario}>
          <View style={{ flexDirection:'row', justifyContent: 'space-evenly', width: '100%' }}>
            <Button disabled>login</Button>
            <Button onPress={() => navigation.jumpTo('Registro')}>Registrarse</Button>
          </View>
          {/* <Text>Aqui van botones!</Text> */}
          <Text category='h4'>¡Bienvendio a la app!</Text>
          <Input placeholder='E-Mail'style={estilos.inputs} onChangeText={(t) => {setEmail(t)}} />
          <Input secureTextEntry placeholder='Contraseña'style={estilos.inputs} onChangeText={(t) => {setPassword(t)}} />
          <Button onPress={iniciarSesion} disabled={cargando} accessoryLeft={ cargando ? LoadingIndicator : undefined } >¡Iniciar sesion!</Button>
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
