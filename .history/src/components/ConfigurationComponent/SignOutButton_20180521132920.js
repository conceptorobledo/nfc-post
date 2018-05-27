import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { View, Text, StyleSheet, Button } from 'react-native';

class SignOutButton extends Component {
    render() {
        return (
            <Button title={this.props.title} onPress={this.props.navigate} />
        );
    }
}

export default SignOutButton;

const styles = StyleSheet.create({
    button: {
        flex: 1
    }
});