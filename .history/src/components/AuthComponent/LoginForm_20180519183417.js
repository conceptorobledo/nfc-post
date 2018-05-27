// Formik x React Native example
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({

});



const loginForm = props => {
  
  return (
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
      <Button onPress={props.handleSubmit} title="Login" />
    </View>
  )
};

export default enhancer(loginForm);

