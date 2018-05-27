import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {
    render() {
        return (
          <View>
              <LoginForm/>
          </View>
        );
    }
}

export default LoginScreen;