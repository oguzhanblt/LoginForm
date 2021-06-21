//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import Logo from './Logo';
import EmailAndPassword from'./EmailAndPassword';




// create a component
const LoginForm = () => {
    return (
            <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
        <View style={styles.Container}>
            <View style={styles.logocontainer}>
                <Logo/>
            </View>
            <View style={styles.emailAndPasswordContainer}>
                <EmailAndPassword/>
            </View>
        </View>
        </ImageBackground>
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
        marginTop:100,
        alignItems: 'center',
    },
    emailAndPasswordContainer:{
        flex: 1,
        justifyContent: 'center',
        

    },
    BackgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


//make this component available to the app
export default LoginForm;
