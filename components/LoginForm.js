//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo';
import EmailAndPassword from'./EmailAndPassword';




// create a component
const LoginForm = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.logocontainer}>
                <Logo/>
            </View>
            <View style={styles.emailAndPasswordContainer}>
                <EmailAndPassword/>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logocontainer:{
        flex: 1,
        justifyContent: 'center',
        marginTop:-250,
        alignItems: 'center',
    },
    emailAndPasswordContainer:{
        flex: 1,
        justifyContent: 'center',

    }
});


//make this component available to the app
export default LoginForm;
