import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

class NavigationButton extends Component {
    render() {
        return (
            <Button title={this.props.title} onPress={this.props.navigate} />
        );
    }
}

export default NavigationButton;
