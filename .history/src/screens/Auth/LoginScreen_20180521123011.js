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

    myCallback = (dataFromChild) => {
        console.log('myCallback');
        console.log(dataFromChild);
    }


    render() {
        return (
            <View>
                <LoginForm callbackFromParent={this.myCallback} />
            </View>
        );
    }
}

export default LoginScreen;