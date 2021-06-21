import React,{Component} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import Articles from './components/Articles';
import firebase from 'firebase';
import Loading from './components/Loading';




class App extends Component{
  state={
    loggedIn:null
  }


  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyApRCyR1tTb2qFmVlWZPWN3P0QxAf3T6jY",
      authDomain: "baslangic-c4648.firebaseapp.com",
      projectId: "baslangic-c4648",
      storageBucket: "baslangic-c4648.appspot.com",
      messagingSenderId: "1021286306424",
      appId: "1:1021286306424:web:eebece5e1d2aa98490538d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
      this.setState({
        loggedIn:true
      })
      }else{
        this.setState({
          loggedIn:false
        })
      }
    })
  }

  renderContent=()=>{
    switch(this.state.loggedIn){
      case false:
        return <LoginForm/>
      case true:
        return <Articles/>

        default:
          return <Loading/>
    }
  }
  
  render(){
    return(
      
      <View style={styles.container}>
         
        {this.renderContent()}
        
      </View>
    );
  }

};

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',

  },
 
  
});

export default App;