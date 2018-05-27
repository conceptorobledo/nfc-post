import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    handleSubmit = values => {
        console.log('HandleSubmit');
        const email = values.email;
        const password = values.password;
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then((user) => {
                props.navigate;
            })
            .catch((err) => {
                const { code, message } = err;
                console.log(err);
            });
    }

    render() {
        return (
            <View>
                <LoginForm navigate={() => this.props.navigation.navigate('NFC')} handleSubmit={ this.handleSubmit }/>
            </View>
        );
    }
}

export default LoginScreen;