import { createStackNavigator } from '@react-navigation/stack'
import type { StackScreenProps, StackNavigationProp } from '@react-navigation/stack'

import type { pantallaConsejos as consejoProp } from '../types'

import Consejos2 from '../screens/Consejos2'
import Consejo from '../screens/Consejo'

type StackConsejoProps = {
    Consejos2: undefined
    Consejo: consejoProp
}

export type StackConsejosScreenProps = StackScreenProps<StackConsejoProps, 'Consejo', 'Consejos2'>
export type NavigationConsejosProps = StackNavigationProp<StackConsejoProps>

const Stack = createStackNavigator<StackConsejoProps>()

export function StackConsejo() {
    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
            <Stack.Screen name='Consejos2' component={Consejos2} />
            <Stack.Screen name='Consejo' component={Consejo} />
        </Stack.Navigator>
    )
}