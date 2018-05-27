import React, { Component } from 'react';
import { StyleSheet, Text, View, NetInfo } from 'react-native';

class NetInfoComponent extends Component {
    state = {
        isDeviceOnline: false
    }

    componentDidMount() {

        NetInfo.isConnected.fetch().then(isConnected => {
            isConnected ? this.setState({ isDeviceOnline: true }) : this.setState({ isDeviceOnline: false });
            console.log(this.state)
        });
        handleFirstConnectivityChange = isConnected => {
            console.log('function called')
            isConnected ? this.setState({ isDeviceOnline: true }) : this.setState({ isDeviceOnline: false });
            console.log(this.state)

        }
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', handleFirstConnectivityChange);
    }

    render() {
        const display = this.state.isDeviceOnline ? '' : 'No hay conexión a internet';
        return (
            <Text style={styles.netInfoSnippet}>{display}</Text>
        )
    }
}

const styles = StyleSheet.create({
    netInfoSnippet: {
        backgroundColor:'red',
        color:'white',
        padding: 12,
        borderRadius: 10
    }
});

export default NetInfoComponent;