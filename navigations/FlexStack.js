import * as React from 'react';

import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';
import NetworkCreateScreen from '../screens/NetworkCreateScreen';
import FlexScreen from '../screens/FlexScreen';
import Ex1Screen from '../screens/Ex1Screen';
import Ex2Screen from '../screens/Ex2Screen';
import Ex3Screen from '../screens/Ex3Screen';
import Ex4Screen from '../screens/Ex4Screen';
import Ex5Screen from '../screens/Ex5Screen';
import Ex6Screen from '../screens/Ex6Screen';
import Ex7Screen from '../screens/Ex7Screen';
import Ex8Screen from '../screens/Ex8Screen';
import Ex9Screen from '../screens/Ex9Screen';
import Ex10Screen from '../screens/Ex10Screen';
import Ex11Screen from '../screens/Ex11Screen';
import Ex12Screen from '../screens/Ex12Screen';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function FlexStack() {
    return (
        <Stack.Navigator initialRouteName="FlexScreen">
            <Stack.Screen 
                name="FlexScreen" 
                component={FlexScreen} 
                options={{  title: 'Flex Title'  }} 
                />

            <Stack.Screen 
                name="Ex1Screen" 
                component={Ex1Screen} 
                options={{  title: 'Ex1'  }} 
                />
        
            <Stack.Screen 
                name="Ex2Screen" 
                component={Ex2Screen} 
                options={{  title: 'Ex2'  }} 
                />
            <Stack.Screen 
                name="Ex3Screen" 
                component={Ex3Screen} 
                options={{  title: 'Ex3'  }} 
                />
            <Stack.Screen 
                name="Ex4Screen" 
                component={Ex4Screen} 
                options={{  title: 'Ex4'  }} 
                />
            <Stack.Screen 
                name="Ex5Screen" 
                component={Ex5Screen} 
                options={{  title: 'Ex5'  }} 
                />
            <Stack.Screen 
                name="Ex6Screen" 
                component={Ex6Screen} 
                options={{  title: 'Ex6'  }} 
                />
            <Stack.Screen 
                name="Ex7Screen" 
                component={Ex7Screen} 
                options={{  title: 'Ex7'  }} 
                />
            <Stack.Screen 
                name="Ex8Screen" 
                component={Ex8Screen} 
                options={{  title: 'Ex8'  }} 
                />
            <Stack.Screen 
                name="Ex9Screen" 
                component={Ex9Screen} 
                options={{  title: 'Ex9'  }} 
                />
            <Stack.Screen 
                name="Ex10Screen" 
                component={Ex10Screen} 
                options={{  title: 'Ex10'  }} 
                />
            <Stack.Screen 
                name="Ex11Screen" 
                component={Ex11Screen} 
                options={{  title: 'Ex11'  }} 
                />
            <Stack.Screen 
                name="Ex12Screen" 
                component={Ex12Screen} 
                options={{  title: 'Ex12'  }} 
                />
            
            

        </Stack.Navigator>
    );

  
}
