import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import colors from '../config/colors';
import { StyleSheet,TextInput,Dimensions,View,TouchableOpacity,Button , Text,useWindowDimensions } from 'react-native';

// import { Button, SafeAreaView } from 'react-native-web';
// import WelcomeScreen from './app/Screens/WelcomeScreen';
// import ViewImageScreen from './app/Screens/ViewImageScreen';
// import AppButton from './app/Screens/AppButton';
// import Card from './app/Screens/Card';
// import LoginPage from './app/Screens/loginPage';
// import { StyleSheet,, Text,  } from 'react-native'
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'expo-image-picker';

const SignInScreen=()=> {
  const [login,setLogin]=useState({
    email:"",
    nom:"",
prenom:"",
age:"",
adresse:"",
email:"",
confirm_email:"",
password:"",
  })
  const signInUser=()=>{
    if(login.email!="" && login.nom!="" && login.prenom!="" && login.age!="" && login.adresse!="" && login.email!="" && login.confirm_email!="" && login.password!=""){
      console.log(login.email)
      console.log(login.confirm_email)
      if(login.email!=login.confirm_email){
            Toast.show({
              type: 'error',
              position: 'top',
              text1: 'Error',
              text2: 'Confermer votre email',
              visibilityTime: 3000, // duration of the toast (in milliseconds)
          })
          return 
        }
        console.log(isFinite(login.age))
        console.log(login.age)
        if(isFinite(login.age)==false){

          console.log(login.age)
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: 'L AGE DOIT ETRE UN ENTIER',
            visibilityTime: 3000, // duration of the toast (in milliseconds)
        })
        return 
  
        }else{

          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Success',
            text2: login,
            visibilityTime: 3000, // duration of the toast (in milliseconds)
          });
        }
    }else{
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Tout les champs sont obligatoire !!',
        visibilityTime: 3000, // duration of the toast (in milliseconds)
    })

    }
      
  }
  const [user,setUser]=useState(new FormData())
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if(result){
      user.set("image",result);
    }
  };
  const loginUser=()=>{
    var API_URL="http://192.168.1.2:5000/API"
    // API_URL=""
      fetch(`${API_URL}/user/login`,{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"multipart/form-data"
    
        },        body:user
    
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
    
  
  
  }  //get the Dimensions of screen
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
        Sign In Page
      </Text>
      <TouchableOpacity onPress={pickImage} style={[styles.buttonStyle,{backgroundColor:colors["primary"],bottom:640}]}>
        <Text style={styles.text}>
            Choose an image
        </Text>
    </TouchableOpacity>
    <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Nom"
        value={login.nom}
        onChangeText={(text) => setLogin({...login,nom:text})}  // Update state as user types
      />

    <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Prenom"
        value={login.prenom}
        onChangeText={(text) => setLogin({...login,prenom:text})}  // Update state as user types
      />
    <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Age"
        value={login.age}
        onChangeText={(text) => setLogin({...login,age:text})}  // Update state as user types
      />
    <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Adresse"
        value={login.adresse}
        onChangeText={(text) => setLogin({...login,adresse:text})}  // Update state as user types
      />

      <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Email"
        value={login.email}
        onChangeText={(text) => setLogin({...login,email:text})}  // Update state as user types
      />
      <TextInput
        style={[styles.input,{bottom:100}]}
        placeholder="Confirmation Email"
        value={login.confirm_email}
        onChangeText={(text) => setLogin({...login,confirm_email:text})}  // Update state as user types
      />

      <TextInput
        style={[styles.input,{bottom:80}]}
        placeholder="Password"
        value={login.password}
        onChangeText={(text) => setLogin({...login,password:text})}  // Update state as user types

      />
    <TouchableOpacity onPress={signInUser} style={[styles.buttonStyle,{bottom:150}]}>
        <Text style={styles.text}>
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
   buttonImagePicker:{
    fontWeight:"bold",
    width:'80%',
    borderStyle:'solid',
    borderBottomWidth:1,
    fontSize:18,
    // textTransform:"uppercase",
    bottom:80

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
export default SignInScreen