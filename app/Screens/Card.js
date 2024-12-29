import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const Card = ({image,title,subtitle}) => {
  // Convert titleCard and subTitle to strings if they are objects

  return (
    <View style={styles.card}>
      <Image  resizeMode='contain' style={styles.image} source={image}/>
      <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    
  },
  image:{
    width:"100%",
    height:200
  },
  container:{
    padding:20
  }
});
