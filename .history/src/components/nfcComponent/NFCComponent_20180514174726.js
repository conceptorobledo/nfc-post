import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, NetInfo } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import firebase from 'react-native-firebase';

//import NetInfoComponent from './NetInfoComponent';


class NFCComponent extends Component {
  state = {
    supported: true
  }

  componentDidMount() {
    /* NfcManager.isSupported()
      .then(supported => {
        this.setState({ supported });
        if (supported) {
          console.log('start NFC');
          this._startNfc();
        }
      }); */

  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
  }


  render() {
    const database = firebase.database();
    const patrolsRef = database.ref('patrols');

    let { supported, tag } = this.state;

    NfcManager.registerTagEvent(tag => {
      console.log('Tag Discovered', tag.ndefMessage[0]);
      if (tag.ndefMessage[0] == undefined) return;
      //TimeStamp 
      const currentTimestamp = Math.round(new Date().getTime() / 1000);

      //Utilizar URI por compatibilidad del Parser      
      const uri = NdefParser.parseUri(tag.ndefMessage[0]).uri;

      const patrolData = { timestamp: currentTimestamp, homeId: uri };
      const pushNewPatrol = patrolsRef.push();
      console.log(pushNewPatrol.key);
      pushNewPatrol.set(patrolData);

    }, 'Hold your device over the tag', true);

    //const nfcsupported = <Text>{`Is NFC supported ? ${supported}`}</Text>;
    //const display = this.state.isDeviceOnline ? 'yes' : 'no';


    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            source={require('../../assets/waves.png')}
            style={{ width: 200, height: 189 }}
          />
          <Text style={styles.text}>NFC reader</Text>
        </View >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffa500',
    flex: 1
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 20
  }
});


export default NFCComponent;