import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {

    state = {};
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }




    isAuth = (res) => {
        console.log('isAuth')
        if (res == 'err') {
            console.log('error');
        }
        if (res == 'ok') {
            console.log('okey');
            this.props.navigation.navigate('NFC');
        }
    }


    render() {
        return (
            <View>
                <LoginForm isAuth={this.myCallback} />
            </View>
        );
    }
}

export default LoginScreen;