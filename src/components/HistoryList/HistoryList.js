import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import HistoryListItem from './HistoryListItem';
import { fetchPatrols } from '../../store/actions/dataAction';

class componentName extends Component {

    componentDidMount() {
        this.props.fetchPatrols();
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.patrols}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <HistoryListItem timestamp={item.timestamp} address={item.address} status={item.status} />}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return{
        patrols: state.patrols.patrols
    }
}

export default connect(mapStateToProps,{ fetchPatrols })(componentName);

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});