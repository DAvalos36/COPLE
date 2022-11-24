import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { Button, Text, BottomNavigation, Input, BottomNavigationTab, Icon, withStyles } from '@ui-kitten/components'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'


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


export default function Login({navigation}: Props) {
  
  // const bottomState = useBottomNa
  
  return (
    <View style={{flex:1, justifyContent:'space-between', padding: 8}}>
        <Text>Pantalla de Login aqui</Text>
        <View style={estilos.formulario}>
          <Text>Aqui van botones!</Text>
          <Text category='h4'>¡Bienvendio a la app!</Text>
          <Input placeholder='E-Mail'style={estilos.inputs}/>
          <Input placeholder='Contraseña'style={estilos.inputs}/>
          <Button>abc</Button>
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
