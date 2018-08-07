import React, { Component } from 'react';
import { StyleSheet, Text, View, NetInfo } from 'react-native';
import withNetInfo from '../../hocs/withNetInfo';

class InternetStatusBar extends Component {

    render() {
        const { isConnected } = this.props
        const display = isConnected ? '' : 'No hay conexión a internet';
        if (!isConnected) {
            return (
                <View>
                    <Text style={styles.netInfoSnippet}>{display}</Text>
                </View>
            )
        }
        else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    netInfoSnippet: {
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: 'red',
        color: '#FFF',
        padding: 14
    }
});

export default withNetInfo(InternetStatusBar);