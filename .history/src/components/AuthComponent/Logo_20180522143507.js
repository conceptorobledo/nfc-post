// Formik x React Native example
import React, { Component } from 'react';
import { Image } from 'react-native';



const logo = props => {
  return (
    <Image style={styles.box} source={require('../../assets/logo.png')}/>
  )
};

const styles = StyleSheet.create({
    box:{
        flex:1,
        
    }
});

export default logo;

