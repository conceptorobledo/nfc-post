// Formik x React Native example
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({
 
});
const handleSubmit = values => {
  console.log('HandleSubmit');
  const email = values.email;
  const password = values.password;
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then((user) => {
      props.navigate;
    })
    .catch((err) => {
      const { code, message } = err;
      console.log(err);
    });
}
const loginForm = props =>{ 
return(
  <View>
    <Text>Usuario</Text>
    <TextInput
      onChangeText={text => props.setFieldValue('email', text)}
      value={props.values.email}
    />
    <Text>Contraseña</Text>
    <TextInput
      secureTextEntry={true}
      onChangeText={text => props.setFieldValue('password', text)}
      value={props.values.password}
    />
    <Button onPress={handleSubmit} title="Login" />
  </View>
)};

export default enhancer(loginForm);

