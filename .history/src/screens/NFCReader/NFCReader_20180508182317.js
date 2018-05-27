import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NFCComponent from '../../components/NFCCOmponent/NFCCOmponent';

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