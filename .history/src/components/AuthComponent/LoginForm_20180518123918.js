// Formik x React Native example
import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({
  /*...*/
});

const loginForm = (mockData, delay) => WrappedComponent => {
  class LoginForm extends Component {
    state = {
      data: [],
      useDefault: true
    }

    render() {
      (
        <View>
          <Text>Usuario</Text>
          <TextInput
            onChangeText={text => props.setFieldValue('email', text)}
            value={props.values.email}
          />
          <Text>Contraseña</Text>
          <TextInput
            onChangeText={text => props.setFieldValue('password', text)}
            value={props.values.password}
          />
          <Button onPress={props.handleSubmit} title="Login" />
        </View>
      );
    }
  }

  return LoginForm;
}

export default enhancer(LoginForm);

