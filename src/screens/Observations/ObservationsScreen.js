import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MessageForm from '../../components/MessageForm/MessageForm';
import NavigationButton from '../../components/NavigationButton/NavigationButton';

class ObservationsScreen extends Component {
    static navigationOptions = {
        gesturesEnabled: true,
        header: null
    }
    
    render() {
        return (
            <View>
                <NavigationButton title="NFC" navigate={() => this.props.navigation.goBack()} />
                <MessageForm />
            </View>
        );
    }
}

export default ObservationsScreen;

