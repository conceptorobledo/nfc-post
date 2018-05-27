// Formik x React Native example
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({

});

const loginForm = props => {

  const handleSubmit = values => {
    console.log('HandleSubmit');
    const email = props.values.email;
    console.log(email);
    const password = props.values.password;
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
      })
      .catch((err) => {
        const { code, message } = err;
        console.log(err);
        console.log('to props');
      });
  }
  return (
    <View style={styles.box}>
      <Text style={styles.label}>Usuario</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={text => props.setFieldValue('email', text)}
        value={props.values.email}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='rgba(0,0,0,0)'
        secureTextEntry={true}
        onChangeText={text => props.setFieldValue('password', text)}
        value={props.values.password}
      />
      <Button onPress={handleSubmit} title="Login" />
    </View>
  )
};

const styles = StyleSheet.create({
  box: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    color: '#fff'
  },
  input: {
    borderColor: '#fff'
  }

});

export default enhancer(loginForm);

