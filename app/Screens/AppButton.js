import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import colors from '../config/colors'

import React from 'react'

const AppButton = ({title,color="primary"}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:colors[color]}]}>
        <Text style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default AppButton

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
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
})