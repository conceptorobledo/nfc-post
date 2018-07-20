import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from 'react-native-firebase';

import HistoryListItem from './HistoryListItem';

class componentName extends Component {

    state = {
        patrols: []
    }

    componentDidMount() {
        const database = firebase.database();
        const patrolsRef = database.ref('patrols');
        const homesRef = database.ref('homes');
        const userRef = database.ref('users');
        const userUid = firebase.auth().currentUser.uid;
        patrolsRef.limitToLast(5).on('child_added', (snapshot) => {
            const patrolInfo = snapshot.val();
            patrolInfo.key = snapshot.key;
            homesRef.child(patrolInfo.homeId).once('value', snap => {
                patrolInfo.address = snap.val().address;
                this.setState((prevState) => {
                    return {
                        patrols: [...prevState.patrols, patrolInfo]
                    }
                });
            }, err => console.log(err));
        });
    }

    componentDidUpdate() {
        //Limita las patrullas a las 5 últimas
        if (this.state.patrols.length > 5) {
            this.state.patrols.sort(function (a, b) { return (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0); });
            const slicePatrols = this.state.patrols.slice(0, 5);
            console.log(slicePatrols);
            this.setState({ patrols: slicePatrols });
        }
    }

    render() {
        this.state.patrols.sort(function (a, b) { return (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0); });

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.patrols}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <HistoryListItem timestamp={item.timestamp} address={item.address} status={item.status} />}
                />
            </View>
        );
    }
}

export default componentName;

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});