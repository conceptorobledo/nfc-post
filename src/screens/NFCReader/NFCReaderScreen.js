import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';

import NFCComponent from '../../components/NFCComponent/NFCComponent';
import NavContainer from '../../components/Navigation/NavContainer'
import HistoryList from '../../components/HistoryList/HistoryList'
import InternetStatusBar from '../../components/InternetStatusBar/InternetStatusBar';

class NFCReaderScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerRight: <NavContainer onPress={()=>navigation.navigate("Settings")}/>
    })

    render() {

        return (
            <View style={styles.container}>
                {/* <NavigationButton title="Observaciones" navigate={() => this.props.navigation.navigate('Observations')} /> */}
                <InternetStatusBar/>
                <NFCComponent />
                <HistoryList/>
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