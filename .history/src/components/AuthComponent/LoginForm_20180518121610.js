// Formik x React Native example
import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';


OnLogin = () => {
  const { email, password } = this.state
}

class LoginForm extends Component {
  render() {
    <View>
      <Formik
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <View>
            <TextInput
              name="email"
              onChangeText={props.setFieldValue}
              value={props.values.email}
            />
            <Button title="submit" onPress={props.handleSubmit} />
          </View>
        )}
      />
    </View>
  }
}

export default LoginForm;