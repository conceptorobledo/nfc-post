import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import nfcComponent from '../../components/nfcComponent/nfcComponent';




class nfcComponent extends Component {

    render() {
        return (
            <View>
                <NotificationsList />
            </View>
        );
    }
}

export default nfcComponent;