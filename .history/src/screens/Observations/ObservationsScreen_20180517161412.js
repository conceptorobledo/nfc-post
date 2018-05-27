import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MessageForm from '../../components/MessageForm/MessageForm';

class ObservationsScreen extends Component {

    render() {
        return (
            <View>
                <Button title="Ir a navegación" onPress={() => this.props.navigation.navigate('Observations')} />
                <MessageForm />
            </View>
        );
    }
}

export default ObservationsScreen;

