import React, { useState } from 'react';
 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   ImageBackground,
 } from 'react-native';
 
 import QRCodeScanner from 'react-native-qrcode-scanner';
 
 const qrOkut = () => {
 
   const [scan, setScan] = useState(false)
   const [result, setResult] = useState()
 
   onSuccess = (e) => {
     setResult(e.data)
     setScan(false)
   }
 
   startScan = () => {
     setScan(true)
     setResult()
   }
 
   return (
     <>
     <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
           
            { result &&
              <View style={styles.sectionContainer}>
                <Text style={styles.centerText}>{result}</Text>
              </View>
            }
             { scan &&
               <View style={styles.sectionContainer}>
               <QRCodeScanner
                 reactivate={true}
                 showMarker={true}
                 ref={(node) => { this.scanner = node }}
                 onRead={this.onSuccess}
                 topContent={
                   <Text style={styles.centerText}>
                     Kamera Açılıyor
                   </Text>
                 }
                 bottomContent={
                   <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
                     <Text style={styles.buttonText}>Cancel Scan</Text>
                   </TouchableOpacity>
                 }
               />
             </View>
             }
             { !scan &&
               <TouchableOpacity onPress={this.startScan} style={styles.buttonContainer}>
               <View>
                   <Text style={styles.girisButtonText}>Okut</Text>
               </View>
           </TouchableOpacity>

             }
     </ImageBackground>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
   startContainer:{
     width:250,
     height:150,
     marginTop:500
   },
   centerText: {
     flex: 1,
     fontSize: 18,
     padding: 32,
     color: '#777',
   },
   BackgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
},
buttonContainer:{
  backgroundColor:'black',
  padding:5,
  width:200,
  height:50,  
  borderRadius:8,
  marginTop:400
},
girisButtonText:{
  textAlign:'center',
  color:'white',
  fontSize:18,
  paddingTop:5
},
 });
 
 export default qrOkut;