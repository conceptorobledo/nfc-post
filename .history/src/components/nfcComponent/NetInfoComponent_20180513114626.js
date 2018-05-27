import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, NetInfo } from 'react-native';
import firebase from 'react-native-firebase';

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
}
export default NetInfoComponent;