// Formik x React Native example
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';



const logo = props => {
    return (
        <View style={styles.box}>
            <Image  source={require('../../assets/logo.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: 50,
        height: 50
    }
});

export default logo;

