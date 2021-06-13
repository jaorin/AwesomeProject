import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TodoTab from './navigations/TodoTab';
import { fb } from './db_config';

import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import MapTab from './navigations/MapTab';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContext";

const RootStack = createStackNavigator();


export default function App() {

    const [user, setUser] = useContext(AuthContext);

    useEffect(() => {
        const subscriber = fb.auth().onAuthStateChanged((current_user) => {
            if (current_user) {
                //IF USER SIGN IN
                setUser(current_user);
            } else {
                //ELSE USER SIGN OUT OR NOT LOGIN
                setUser(null);
            }
            console.log("USER : ", user);
        });
        return subscriber; // unsubscribe on unmount
    });
    return (
        <AuthContextProvider>
            <NavigationContainer NavigationContainer>
                <RootStack.Navigator initialRouteName="BottomTab">
                    <RootStack.Screen
                        name="BottomTab"
                        component={BottomTab}
                        options={{ title: 'Main', headerShown: false }}
                    />

                    <RootStack.Screen
                        name="SecondBottomTab"
                        component={SecondBottomTab}
                        options={{ title: 'Second Tab' }}
                    />

                    <RootStack.Screen
                        name="TodoTab"
                        component={TodoTab}
                        options={{ title: 'Todo Tab' }}
                    />

                    <RootStack.Screen
                        name="MapTab"
                        component={MapTab}
                        options={{ title: 'Location and Map' }}
                    />

                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContextProvider>
    );
}