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

    componentDidUpdate(){
    }



    navigateTo = () => {
        console.log('ok');
        () => this.props.navigation.navigate('NFC');
    }

    navigateTo = (res) => {
        console.log('navigateTo')
        if(res == 'err'){
            console.log('error');
        }
        if(res == 'ok'){
            console.log('okey');
        }
    }


    render() {
        return (
            <View>
                <LoginForm navigateTo={this.myCallback} />
            </View>
        );
    }
}

export default LoginScreen;