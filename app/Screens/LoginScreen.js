import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import colors from '../config/colors';
import { StyleSheet,TextInput,Dimensions,View,TouchableOpacity , Text,useWindowDimensions } from 'react-native';
// import { Button, SafeAreaView } from 'react-native-web';
// import WelcomeScreen from './app/Screens/WelcomeScreen';
// import ViewImageScreen from './app/Screens/ViewImageScreen';
// import AppButton from './app/Screens/AppButton';
// import Card from './app/Screens/Card';
// import LoginPage from './app/Screens/loginPage';
// import { StyleSheet,, Text,  } from 'react-native'
import Toast from 'react-native-toast-message';

const LoginScreen=({ navigation })=> {
  const [login,setLogin]=useState({
    email:"",
    password:""
  })
  const signIn=()=>{
    navigation.navigate('SignIn')
  }
const loginUser=()=>{
  var API_URL="http://192.168.1.2:5000/API"
  // API_URL=""
  if(login.email=="" || login.password==""){
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Error',
      text2: 'Please all the fields must be filled',
      visibilityTime: 3000, // duration of the toast (in milliseconds)
  })
  }else{

    fetch(`${API_URL}/user/login`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
  
      },        body:JSON.stringify(login)
  
    }).then(res=>res.json()).then(res=>{
      if(res.u){
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success',
          text2: 'Connected with success ',
          visibilityTime: 3000, // duration of the toast (in milliseconds)
        });
 
      }
      if(res.err){
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: res.err,
          visibilityTime: 3000, // duration of the toast (in milliseconds)
        });
      }
    }).catch(err=>{console.log(err)})
  }


}
  //get the Dimensions of screen
  // console.log(useWindowDimensions())
  // useEffect(()=>{
  //   var API_URL="http://192.168.1.2:5000/API"
  //   // API_URL=""
  //   fetch(`${API_URL}/user/login`,{
  //     method:"POST",
  //     headers:{
  //       "Accept":"application/json",
  //       "Content-Type":"application/json"

  //     },        body:JSON.stringify(login)

  //   }).then(res=>res.json()).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{console.log(err)})
  // },[])
  const handlePress=()=>{
    
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[styles.titleLogin]}>
        Login Page
      </Text>
      <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Email"
        value={login.email}
        onChangeText={(text) => setLogin({...login,email:text})}  // Update state as user types
      />

      <TextInput
        style={[styles.input,{bottom:80}]}
        placeholder="Password"
        value={login.password}
        onChangeText={(text) => setLogin({...login,password:text})}  // Update state as user types

        // onChangeText={(text) => setInputText(text)}  // Update state as user types
      />
    <TouchableOpacity onPress={signIn} style={[styles.buttonStyle,{bottom:150}]}>
        <Text  style={styles.text}>
            Sign In
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={loginUser} style={[styles.buttonStyle,{backgroundColor:colors["primary"]}]}>
        <Text style={styles.text}>
            Login
        </Text>
    </TouchableOpacity>
    <Toast />
    </View>

    // <AppButton title={"login"} style={[styles.loginButton]}/>

    // <View
    // style={{backgroundColor:"#f8f4f4",padding:20,paddingTop:100}}>
    //     <Card 
    //      title="Red Jacket For sale" 
    //      subtitle="$100"
    //      image={require("./app/images/shoose_1.jpg")}
    //      />
    // </View>
    // <WelcomeScreen/>
    // <View style={{
    //   flex:1,
    //   justifyContent:"center",
    //   alignItems:"center"
    // }}>
    // <AppButton title={"login"}/>

    // </View>
    // <View 
    // style={{
    //   backgroundColor:"white",
    //   // width:"100%",
    //   // height:Dimensions.get('window').width>Dimensions.get('window').height?"50%":"30%"
    //   flex:1,
    //   flexDirection:"row",
    //   justifyContent:"center",
    //   alignItems:"center"
    // }}
    // >
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //   <View
    //    style={{
    //     backgroundColor:"green",

    //     width:100,
    //     height:100,
    //     position:"absolute",
    //     top:10
    //     // height:Dimensions.get('window').width>Dimensions.get('window').height?"50%":"30%"
    //   }}
    //   />
    //   <View
    //    style={{
    //     backgroundColor:"blue",
    //     width:100,
    //     height:100,
    //   }}
    //   />
    //   <View
    //    style={{
    //     backgroundColor:"orange",
    //     width:100,
    //     height:100,
    //   }}
    //   />

    // </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle:{
    
    backgroundColor:colors.primary,
    borderRadius:25,
    justifyContent:"center",alignItems:"center",
    padding:15,
    width:"90%",
    margin:5,
    position:'absolute',
    bottom:80,        
    left:15     
},  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontWeight:"bold",
    width:'80%',
    borderStyle:'solid',
    borderBottomWidth:1,
    fontSize:18,
    // textTransform:"uppercase",
    bottom:60
  },  
  text:{
    color:colors.white,
    fontSize:18,
    textTransform:"uppercase",
    
},titleLogin:{
  bottom:250,
  fontSize:38,
  fontWeight:'bold'
}

});
export default LoginScreen