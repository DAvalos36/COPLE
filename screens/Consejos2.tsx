import { StyleSheet, View, Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

type Props = {}

import { consejos } from '../consejos'
import { NavigationConsejosProps } from '../navigation/StackConsejo'

const Consejos2 = () => {
    const navigation = useNavigation<NavigationConsejosProps>()

  return (
    <Layout style={styles.container} >
        <TouchableOpacity style={styles.renglon} onPress={() => navigation.navigate('Consejo', consejos[0]) } >
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/indentificaIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Identifica</Text>
                <Text >{consejos[0].contenido}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.renglon} onPress={() => navigation.navigate('Consejo', consejos[1]) } >
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/conoceIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Conoce</Text>
                <Text >{consejos[1].contenido}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.renglon} onPress={() => navigation.navigate('Consejo', consejos[2]) } >
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/previeneIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Previene</Text>
                <Text >{consejos[2].contenido}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.renglon} onPress={() => navigation.navigate('Consejo', consejos[3]) } >
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/concentrateIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Concentrate</Text>
                <Text >{consejos[3].contenido}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.renglon} onPress={() => navigation.navigate('Consejo', consejos[4]) } >
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/aceptaIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Acepta</Text>
                <Text >{consejos[4].contenido}</Text>
            </View>
        </TouchableOpacity>
    </Layout >
  )
}

export default Consejos2

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    renglon: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    contenedorImg:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorTexto:{
        flex: 7,
        padding: 10
    },
    imgElementoInteres: {
        width: '100%',
        height: undefined,
        aspectRatio: 1/1,
      }
})