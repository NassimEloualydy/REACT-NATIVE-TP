import { View, Text, ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import AppButton from './AppButton'

const WelcomeScreen = () => {
  return (
    // <View>
    <ImageBackground style={styles.background}>    
            <Text style={styles.title}>Sell what you don't need</Text>
            <AppButton title="Login"/>
            <AppButton title="Register" color='secondary' />

            {/* <View style={styles.loginBtn}></View>
            <View style={styles.registerBtn}></View> */}
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    
    title:{
        // width:100,
        position:"absolute",
        top:50,
        fontWeight:"bold"
    },
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"

    },
    loginBtn:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65"
    },
    registerBtn:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4"   
    }
})
export default WelcomeScreen