//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';


// create a component
class EmailAndPassword extends Component {

    state={
        email:'',
        password:'',
        error:'',
        loading:''
    }



    onBottomPress=()=>{

        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSucces)


    }

    onLoginSucces=()=>{
        this.setState({
            error:'',
            loading:false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                placeholder="   Email Adresi"
                style={styles.input}
                value={this.state.email}
                onChangeText={email=>this.setState({email})}/>
            
                <TextInput
                placeholder="   Şifre"
                style={styles.input}
                value={this.state.password}
                onChangeText={password=>this.setState({password})}/>
                
                
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
                    <Text style={styles.girisButtonText}>Giriş Yap</Text>
                </TouchableOpacity>


                <Text style={styles.errorText}>
                        {this.state.error}
                    </Text>
            </View>
        );
    }
}
    
    

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30
    },
    input:{
        height:40,
        backgroundColor:'#FCB000',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15
    },
    errorText:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    },
    girisButtonText:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        paddingTop:5
    },
    buttonContainer:{
        backgroundColor:'#FCB000',
        padding:5,
        height:45,  
        borderRadius:8,
        marginTop:20
    }
});

//make this component available to the app
export default EmailAndPassword;
