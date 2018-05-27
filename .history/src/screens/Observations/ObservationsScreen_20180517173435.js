import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MessageForm from '@components/MessageForm/MessageForm';
import NavigationButton from '@components/components/NavigationButton/NavigationButton';

class ObservationsScreen extends Component {
    static navigationOptions = {
        gesturesEnabled: true
    }
    render() {
        return (
            <NavigationButton title="Observaciones" navigate={() => this.props.navigation.goBack()} />            
            <MessageForm />
        );
    }
}

export default ObservationsScreen;

