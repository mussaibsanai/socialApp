import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Screens/Login';




const Stack = createNativeStackNavigator();


export default function AuthNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown : false}} />
        </Stack.Navigator>
    );
}
