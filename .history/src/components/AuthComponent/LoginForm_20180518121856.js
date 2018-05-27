// Formik x React Native example
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({
  /*...*/
});


OnLogin = () => {
  const { email, password } = this.state
}

const LoginForm = props => (
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

export default enhancer(LoginForm);