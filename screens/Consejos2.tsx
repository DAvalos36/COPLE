import { StyleSheet, View, Image  } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components'

type Props = {}

const Consejos2 = (props: Props) => {
  return (
    <Layout style={styles.container} >
        <View style={styles.renglon}>
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/indentificaIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Identifica</Text>
                <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maxime, delectus minima incidunt voluptates aut! Illo voluptas,</Text>
            </View>
        </View>
        <View style={styles.renglon}>
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/conoceIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Conoce</Text>
                <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maxime, delectus minima incidunt voluptates aut! Illo voluptas,</Text>
            </View>
        </View>
        <View style={styles.renglon}>
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/previeneIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Previene</Text>
                <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maxime, delectus minima incidunt voluptates aut! Illo voluptas,</Text>
            </View>
        </View>
        <View style={styles.renglon}>
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/concentrateIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Concentrate</Text>
                <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maxime, delectus minima incidunt voluptates aut! Illo voluptas,</Text>
            </View>
        </View>
        <View style={styles.renglon}>
            <View style={styles.contenedorImg}>
                <Image style={styles.imgElementoInteres} source={require('../assets/Imagenes/aceptaIcono.png')} />
            </View>
            <View style={styles.contenedorTexto}>
                <Text category='h5'>Acepta</Text>
                <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maxime, delectus minima incidunt voluptates aut! Illo voluptas,</Text>
            </View>
        </View>
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