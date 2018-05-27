import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, NetInfo, ToastAndroid } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import firebase from 'react-native-firebase';

import NetInfoComponent from './NetInfoComponent';

//Componente lector de NFC
//Se conecta a firebase para POST de tag leido.
//Usa NetInfo para ver el estado actual de internet, y da aviso si no hay conexión.
//:.Pendiente: 
//:: En el caso de no haber conexión, hacer envio cuando se reestablezca.

class NFCComponent extends Component {
  state = {
    supported: true
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
  }

  firebaseHandler = (homeId,timestamp) => {
    const database = firebase.database();
    const patrolsRef = database.ref('patrols');
    const homesRef = database.ref('homes');

    const patrolData = { timestamp: timestamp, homeId: homeId };
    const pushNewPatrol = patrolsRef.push();

    pushNewPatrol.set(patrolData);
    homesRef.child(homeId + '/patrols').push().set(pushNewPatrol.key);
  }

  render() {


    let { supported, tag } = this.state;

    NfcManager.registerTagEvent(tag => {
      console.log('Tag leido!');
      console.log(tag)
      if (tag.ndefMessage[0] == undefined) {
        ToastAndroid.show('Tostada!.',ToastAndroid.SHORT);   
        return;
      };
      //console.log('Tag Discovered', tag.ndefMessage[0]);      
      //TimeStamp 
      const currentTimestamp = Math.round(new Date().getTime() / 1000);

      //Utilizar URI por compatibilidad del Parser      
      const uri = NdefParser.parseUri(tag.ndefMessage[0]).uri;

      this.firebaseHandler(uri, currentTimestamp);
    }, 'Hold your device over the tag', true);

    //const nfcsupported = <Text>{`Is NFC supported ? ${supported}`}</Text>;


    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            source={require('../../assets/waves.png')}
            style={{ width: 200, height: 189 }}
          />
          <Text style={styles.text}>NFC reader</Text>
        </View>
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