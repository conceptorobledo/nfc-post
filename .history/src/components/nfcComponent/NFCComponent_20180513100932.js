import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import firebase from 'react-native-firebase';

export default class NFCComponent extends Component {
  state = {
    supported: true
  }

  componentDidMount() {
    NfcManager.isSupported()
      .then(supported => {
        this.setState({ supported });
        if (supported) {
          this._startNfc();
        }
      });

    NetInfo.isConnected.fetch().then(isConnected => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    });
    function handleFirstConnectivityChange(isConnected) {
      console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
      NetInfo.isConnected.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
    }
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }

  render() {
    let { supported } = this.state;
    NfcManager.registerTagEvent(tag => {
      console.log('Tag Discovered', tag.ndefMessage[0]);

      //TimeStamp 
      const currentTimestamp = Math.round(new Date().getTime() / 1000);

      //Utilizar URI por compatibilidad del Parser      
      let uri = NdefParser.parseUri(tag.ndefMessage[0]).uri;
      console.log(uri);

      console.log('https://nfc-locator.firebaseio.com/patrols/' + uri + '.json');
      fetch('https://nfc-locator.firebaseio.com/patrols/' + uri + '.json', {
        method: 'POST',
        body: JSON.stringify(currentTimestamp)
      })
        .catch(err => console.log(err))
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }, 'Hold your device over the tag', true);

    let nfcsupported = <Text>{`Is NFC supported ? ${supported}`}</Text>;

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/waves.png')}
          style={{ width: 200, height: 189 }}
        />
        <Text style={styles.text}>NFC reader</Text>
      </View>
    );
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
