import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NFCComponent from '../../components/NFCComponent/NFCComponent';
import NavigationButton from '../../components/NavigationButton/NavigationButton';


class NFCReaderScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
            <Button title="go to obs" onPress={()=>this.props.navigation.navigate('Observations')}/>
                <NFCComponent />
            </View>
        );
    }
}

export default NFCReaderScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });