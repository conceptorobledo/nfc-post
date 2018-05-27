import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NavigationButton extends Component {
    render() {
        return (
            <Button title={this.props.title} onPress={this.props.navigate} />
        );
    }
}

export default NavigationButton;

const styles = StyleSheet.create({
    button: {
        flex: 1
    }
});