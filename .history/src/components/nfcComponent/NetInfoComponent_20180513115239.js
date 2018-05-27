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
        const display = this.state.isDeviceOnline ? 'yes' : 'no';
        return (
            <Text>{display}</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 20,
        color: 'white',
        fontSize: 20
    }
});

export default NetInfoComponent;