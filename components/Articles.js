//import liraries
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Articles = () => {
    return (
        <View style={styles.container}>
            <View style={styles.articlesContainer}>
                <Text style={styles.heading}>
                    doğrulama ekranı
                </Text>
                <Text style={styles.content}>
                doğrulama ekrani
                </Text>
                <TouchableOpacity style={{padding:20}} onPress={()=> firebase.auth().signOut()} >
                    <Text style={{color:'#FCB000'}}>
                        Çıkış
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    articlesContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:2
    },
    heading:{
        fontSize:20,
        color:'black',
        marginBottom:10,
        marginBottom:10
    },
    content:{
        marginTop:10,
        fontSize:19,
    }
});

//make this component available to the app
export default Articles;
