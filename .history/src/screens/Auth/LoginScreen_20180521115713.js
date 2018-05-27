import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/AuthComponent/LoginForm';


class LoginScreen extends Component {

    state = {};

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
        console.log(prevState);

        return null;

    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        console.log('login screen');
    }

    componentDidUpdate(){
        console.log('component did update');
    }



    navigateTo = () => {
        console.log('ok');
        () => this.props.navigation.navigate('NFC');
    }

    myCallback = (dataFromChild) => {

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