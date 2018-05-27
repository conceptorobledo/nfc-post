import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }
    
    componentDidMount(){
        
    }

    navigateMain() {
        console.log('ok');
        () => this.props.navigation.navigate('NFC')
    }

    render() {
        return (
            <View>
                <LoginForm navigate={ this.navigateMain } />
            </View>
        );
    }
}

export default LoginScreen;