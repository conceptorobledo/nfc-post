import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { postToPatrols } from '../../store/actions/dataAction';
import StatusBox from './StatusBox';

//Componente lector de NFC
//Se conecta a firebase para POST de tag leido.
//Usa NetInfo para ver el estado actual de internet, y da aviso si no hay conexión.
//:.Pendiente: 
//:: En el caso de no haber conexión, hacer envio cuando se reestablezca.

class NFCComponent extends Component {
  state = {
    supported: true,
    reading: 'wait'
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
  }

  firebaseHandler = (homeId, timestamp) => {
    const database = firebase.database();
    const patrolsRef = database.ref('patrols');
    const homesRef = database.ref('homes');
    const dailyinfoRef = database.ref('dailyinfo');
    const patrolData = { timestamp: timestamp, homeId: homeId, status: "actividad" };
    const pushNewPatrol = patrolsRef.push();
    homesRef.once('value', snapshot => {
      //TODO
      //Comparar keys con la keys a ingresar para revisar si existe
      const allHomes = Object.keys(snapshot.val());
      //Crea un arreglo con todas las key de hogares.
      const matchHome = allHomes.find((home) => {
        return home == homeId;
      });
      if (typeof matchHome !== 'undefined') {
        pushNewPatrol.set(patrolData);
        homesRef.child(homeId + '/patrols').push().set(pushNewPatrol.key);
        return this.setState({ reading: 'ok' });
      }
      else {
        Alert.alert('El NFC' + homeId + ' no esta identificado.')
        return this.setState({ reading: 'error' });
      }
    });
  }

  render() {

    //TODO
    //Almacenar localmente en asyncstorage cuando n o hay internet y volver a enviar cuando hatya internet

    let { supported, tag } = this.state;

    NfcManager.registerTagEvent(tag => {
      if (tag.ndefMessage == undefined) {
        Alert.alert('No se ha podido leer el chip. Repita la operación para detectar el chip NFC.');
        return this.setState({ reading: 'error' });
      };
      //TimeStamp 
      const currentTimestamp = new Date().getTime();
      //Utilizar URI por compatibilidad del Parser      
      //Se utiliza formato uri en el NFC en posición 0
      const uri = NdefParser.parseUri(tag.ndefMessage[0]).uri;
      //this.firebaseHandler(uri, currentTimestamp);
      this.props.postToPatrols(uri, currentTimestamp);
    }, 'Hold your device over the tag', true);
    if(!this.props.response){
      
    }
    //const nfcsupported = <Text>{`Is NFC supported ? ${supported}`}</Text>;


    return (
      <StatusBox reading={this.state.reading} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
const mapStateToProps = state => {
  return {
    response: state.patrols.response
  }
}

export default connect(mapStateToProps, { postToPatrols })(NFCComponent);