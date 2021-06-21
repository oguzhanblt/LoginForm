//import liraries
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, TouchableOpacity,Image, ImageBackground } from 'react-native';

// create a component
const Articles = () => {
    return (
             <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.cikisButon} onPress={() => firebase.auth().signOut()} >
  
                <Image source={require('../src/image/geriDonus.png')}
                    style={{ height: 50, width: 50, marginTop: -350, marginLeft: 350 }} resizeMode='contain' />
            </TouchableOpacity>
            <View style={styles.articlesContainer}>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.girisButtonText}>QR Okut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.girisButtonText}>Servis Yoğunluk Sorgula</Text>
                </TouchableOpacity>
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
        alignItems: 'center'
    },
    heading: {
        fontSize: 20,
        color: 'black',
        marginTop: 200,
        marginBottom: 10
    },
    content: {
        marginTop: 200,
        fontSize: 19,
    },
    girisButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        paddingTop: 5
    },
    buttonContainer: {
        backgroundColor: 'black',
        padding: 5,
        height: 55,
        width: 300,
        borderRadius: 8,
        marginTop: 20
    },
    BackgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Articles;
