import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, NetInfo } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import firebase from 'react-native-firebase';

class NetInfoComponent extends Component {
    state = {
        isDeviceOnline: false
      }
}
export default NetInfoComponent;