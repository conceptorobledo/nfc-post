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
        const display = connected ? '' : '<Text style={styles.netInfoSnippet}> No hay conexión a internet </Text>';
        return (
            {display}
        )
    }
}

const styles = StyleSheet.create({
    netInfoSnippet: {
        backgroundColor:'red',
        color:'white',
        padding: 12,
        borderRadius: 10,
        marginRight: 25,
        marginTop: 5
    }
});

export default NetInfoComponent;