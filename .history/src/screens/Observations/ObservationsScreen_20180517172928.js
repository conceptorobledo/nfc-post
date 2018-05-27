import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MessageForm from '../../components/MessageForm/MessageForm';

class ObservationsScreen extends Component {
    static navigationOptions = {
        gesturesEnabled: true;
    }
    render() {
        return (
            <MessageForm />
        );
    }
}

export default ObservationsScreen;

