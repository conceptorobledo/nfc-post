import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NFCComponent from '../../components/NFCComponent/NFCComponent';
import NavigationButton from '../../components/NavigationButton/NavigationButton';


class NFCReaderScreen extends Component {

    render() {
        return (
            <View>
                <NFCComponent />
                <NavigationButton />
            </View>
        );
    }
}

export default NFCReaderScreen;