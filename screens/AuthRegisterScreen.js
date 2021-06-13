import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function AuthRegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useContext(AuthContext);

    const onRegister = () => {
        fb.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Register Successfully");
                // Signed in 
                let u = userCredential.user;
                setUser(u);

                navigation.navigate('HomeScreen');
            })
            .catch(error => { console.log("Register Error"); })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Sign Up</Text>
            <Text style={{ color: 'red' }}>
                {message}
            </Text>
            <TextInput
                style={{ width: '90%', padding: 10 }}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={{ width: '90%', padding: 10 }}
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <Button title="Register" style={{ padding: 10 }} onPress={onRegister} />

            <TouchableOpacity onPress={() => navigation.navigate('AuthLoginScreen')} >
                <Text style={{ padding: 10 }}>Already have an account? Login</Text>
            </TouchableOpacity>

        </View>
    );
}
