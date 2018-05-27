import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import nfcComponent from '../../components/nfcComponent/nfcComponent';

class NFCReader extends Component {

    render() {
        return (
            <nfcComponent />
        );
    }
}

export default NFCReader;