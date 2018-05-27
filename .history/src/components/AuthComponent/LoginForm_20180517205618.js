// Formik x React Native example
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({
  /*...*/
});


const LoginForm = props => (
  <View>
    <TextInput
      onChangeText={text => props.setFieldValue('email', text)}
      value={props.values.email}
    />
    <TextInput
      onChangeText={text => props.setFieldValue('password', text)}
      value={props.values.password}
    />
    <Button onPress={props.handleSubmit} title="Login" />
  </View>
);

export default enhancer(LoginForm);