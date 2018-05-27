import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import NFCComponent from '../../components/NFCComponent/NFCComponent';
import NavigationButton from '../../components/NavigationButton/NavigationButton';


class NFCReaderScreen extends Component {
    static NavigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationButton title="Observaciones" navigate={() => this.props.navigation.navigate('Observations')} />
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