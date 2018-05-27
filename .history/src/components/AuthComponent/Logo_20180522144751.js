// Formik x React Native example
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';



const logo = props => {
    return (
        <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/logo.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width:200,
        height:200
    }
});

export default logo;

