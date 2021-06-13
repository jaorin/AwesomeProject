import React, { useState, useEffect , useContext } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function AuthLoginScreen({ navigation, route }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useContext(AuthContext);

    const onLogin = () => {
        fb.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Login Successfully");
                // Signed in 
                let u = userCredential.user;
                setUser(u);

                navigation.navigate('HomeScreen');
            })
            .catch(error => { console.log("Login Error"); })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>
            <Text style={{ color: 'red' }}>
                {message}
            </Text>

            <TextInput
                style={{ width: '90%', padding: 10 }}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={{ width: '90%', padding: 10 }}
                secureTextEntry
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <Button title="Login" style={{ padding: 10 }} onPress={onLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('AuthRegisterScreen')} >
                <Text style={{ padding: 10 }}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}
