import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {

    state: {};

    static getDerivedStateFromProps(nextProps, prevState){

    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        console.log('login screen');
    }


    navigateTo = () => {
        console.log('ok');
        () => this.props.navigation.navigate('NFC');
    }


    render() {
        return (
            <View>
                <LoginForm navigate={this.navigateTo} />
            </View>
        );
    }
}

export default LoginScreen;