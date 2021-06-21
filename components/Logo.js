//import liraries
import React, { Component } from 'react';
import { View,Image,Text,ImageBackground } from 'react-native';

// create a component
const Logo = () => {
    return (
        <View>
           
            <Image source={require('../src/image/Logo.png')}
            style={{height:150,width:300,marginTop:60}} resizeMode='contain' />
          
        </View>

    );
};

//make this component available to the app
export default Logo;
