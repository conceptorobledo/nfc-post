import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Logo from '../../components/AuthComponent/Logo';
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
            <View style={styles.container}>
            <Image source={require('../../assets/background.jpg')}/>
                <Logo/>
                <LoginForm loginStatusVerified={this.isAuth} />
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'orange'
    }

});