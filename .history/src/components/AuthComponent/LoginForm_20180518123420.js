// Formik x React Native example
import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const enhancer = withFormik({
  /*...*/
});


OnLogin = () => {
  const { email, password } = this.state
}

const hasMockData = (mockData, delay) => WrappedComponent => {
  class LoginForm extends Component {
    state = {
      data: [],
      useDefault: true
    }

    componentDidMount() {
      this.props.addTimeout(() => this.setState({data: mockData}), delay)
    }

    componentWillUnmount() {
      this.props.clearTimeouts()
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }

  return hasTimeouts(HasMockData)
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

