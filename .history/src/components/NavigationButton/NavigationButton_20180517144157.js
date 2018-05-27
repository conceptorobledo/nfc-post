import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NavigationButton extends Component {
    render() {
        return (
            <View>
                <Button title="Ir a navegación" onPress={() => this.props.navigation.navigate('Observations')} />
            </View>

        );
    }
}

export default NavigationButton;

const styles = StyleSheet.create({
    Button: {
      backgroundColor: '#ffa500',
      flex: 1
    }
  });