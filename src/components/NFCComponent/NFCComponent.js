import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import { connect } from 'react-redux';
import { postToPatrols } from '../../store/actions/dataAction';
import StatusBox from './StatusBox';
import withNetInfo from '../../hocs/withNetInfo';

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

  _readResponse = () => {
    if (this.props.response === null) return;
    if (!this.props.response.res) {
      Alert.alert('Error de lectura', this.props.response.msg);
    }
    else if (this.props.response.res) {
    }
  }

  componentDidUpdate() {
    //TODO 
    //Experimentando delays
    this._readResponse();
  }

  render() {
    //TODO
    //Almacenar localmente en asyncstorage cuando n o hay internet y volver a enviar cuando hatya internet
    let { supported, tag } = this.state;
    NfcManager.registerTagEvent(tag => {
      if (tag.ndefMessage == undefined) {
        Alert.alert('Error de lectura', 'No se ha podido leer el chip. Repita la operación para detectar el chip NFC.');
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

    const { isConnected } = this.props;
    console.log(this.props);
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

export default withNetInfo(connect(mapStateToProps, { postToPatrols })(NFCComponent));