import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NavigationButton extends Component {
    render() {
        return (
            <View>
            <Button title="Ir a navegación" onPress={()=>this.props.navigation.navigate('Observations')}></Button>
            </View>
       
        );
    }
}

export default NavigationButton;