import { StatusBar } from "expo-status-bar";
import React, { useContext  }  from "react";
import { Text, StyleSheet, Image, props, View, Button } from "react-native";
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function LoginControl(props) {
  const [user, setUser] = useContext(AuthContext);
  const onLogout = () => {
    fb.auth().signOut().then(function () {
      console.log("Logout successfully");
      setUser(null);
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
      console.log(error);
    });
  };

  if (props.isLoggedIn) {
    return <Button title="Logout" onPress={onLogout} color="red" />;
  } else {
    return (
      <Button
        title="Login"
        onPress={() => props.navigation.navigate("AuthLoginScreen")}
        color="blue"
      />
    );
  }
}
