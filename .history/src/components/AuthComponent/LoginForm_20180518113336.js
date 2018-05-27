// Formik x React Native example
import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';




const enhancer = withFormik({
  /*...*/
});

class LoginForm extends Component {
OnLogin = () => {
  const { email, password } = this.state
}

render() {
  
    return (
      <View>
        <Text>Usuario</Text>
        <TextInput
          onChangeText={text => this.setFieldValue('email', text)}
          value={this.values.email}
        />
        <Text>Contraseña</Text>
        <TextInput
          onChangeText={text => this.setFieldValue('password', text)}
          value={this.values.password}
        />
        <Button onPress={this.handleSubmit} title="Login" />
      </View>
    )

  }
}

export default enhancer(LoginForm);