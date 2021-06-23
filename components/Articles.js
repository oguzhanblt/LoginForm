import *as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, Button,ImageBackground } from 'react-native';
import { firebaseAuth } from '../config';
import { Component } from 'react';
import  firebase  from 'firebase';

 export default class Articles extends React.Component{
      constructor(props){
          super(props);
          this.state=
            {
            currentUser:null,
            errorMessage:null
            }
        }
        componentDidMount(){
            const{currentUser}=firebaseAuth;
            this.state={currentUser}
        }
        render(){
            const {currentUser}=this.state
            return(
                <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.cikisButon} onPress={() => firebase.auth().signOut()} >
                            <Image source={require('../src/image/geriDonus.png')}
                            style={{ height: 40, width: 40, marginTop: 0 }} resizeMode='contain' />
                        </TouchableOpacity>
                    <Image source={require('../src/image/Logo.png')}
                            style={{ height: 120, width: 150, marginTop: 0 }} resizeMode='contain' />
                        <View style={styles.articlesContainer}>
                        <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={()=>this.props.navigation.navigate('qrOkut')}>
                            <Text style={styles.ButtonText}>QR Okut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         style={styles.buttonContainer1}
                         onPress={()=>this.props.navigation.navigate('servis')}>
                            <Text style={styles.ButtonText}>Servis Yoğunluk Sorgula</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            )
        }
    
 };



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    cikisButon:{
        left:150
    },
    ButtonText: {
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
        marginTop: 350
    },
    buttonContainer1: {
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
