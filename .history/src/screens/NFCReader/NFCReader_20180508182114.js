import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NFCCOmponent from '../../components/NFCCOmponent/NFCCOmponent';

class NFCReader extends Component {

    render() {
        return (
            <View>
                <NFCCOmponent />
            </View>
        );
    }
}

export default NFCReader;