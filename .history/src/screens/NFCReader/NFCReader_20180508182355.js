import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NFCComponent from '../../components/NFCCOmponent/NFCComponent';

class NFCReader extends Component {

    render() {
        return (
            <View>
                <NFCComponent />
            </View>
        );
    }
}

export default NFCReader;