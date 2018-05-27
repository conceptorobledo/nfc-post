import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NFCComponent from '../../components/NFCComponent/NFCComponent';

class NFCReaderScreen extends Component {

    render() {
        return (
            <NFCComponent />
        );
    }
}

export default NFCReaderScreen;