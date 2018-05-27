import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {

    state = {};
    /* static navigationOptions = {
        header: null
    } */

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    isAuth = res => {
        if (res === false) {
            console.log('error');
        }
        if (res) {
            console.log('okey');
            this.props.navigation.navigate('NFC');
        }
    }


    render() {
        return (
            <View>
                <LoginForm loginStatusVerified={this.isAuth} />
            </View>
        );
    }
}

export default LoginScreen;