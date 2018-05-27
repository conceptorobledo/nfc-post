import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,NetInfo } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import firebase from 'react-native-firebase';

export default class NFCComponent extends Component {
  state = {
    supported: true,
    isUserOnline: false 
  }
  checkConnection = ()  => {
    NetInfo.isConnected.fetch().then(isOnline => {
      this.setState({isUserOnline: isOnline})
    });
  }
  componentDidMount() {
    NfcManager.isSupported()
      .then(supported => {
        this.setState({ supported });
        if (supported) {
          this._startNfc();
        }
      });
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
