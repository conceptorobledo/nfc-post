import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NavigationButton extends Component {
    render() {
        return (
            <Button title="Ir a navegación" onPress={this.props.navigate} />
        );
    }
}

export default NavigationButton;

const styles = StyleSheet.create({
    button: {
        flex: 1
    }
});