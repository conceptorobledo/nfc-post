// Formik x React Native example
import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';




class LoginForm extends Component {
  componentDidMount() {
    const enhancer = withFormik({
      /*...*/
    });
  }



  OnLogin = () => {
    const { email, password } = this.state
  }

  render() {
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
  }
}

export default enhancer(LoginForm);