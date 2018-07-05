import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theTime, shortDate } from '../../helpers/timeformater';

const HistoryListItem = (props) => {
    let borderColor;
    switch (props.status) {
        case 'actividad':
            borderColor = "green"
            break;
        case 'inactividad':
            borderColor = "red"
            break;
    }
    return (
        <View style={[styles.itemcontainer, { borderLeftColor: borderColor }]}>
            <Text style={styles.columnOne}>{props.address}</Text>
            <Text style={styles.columnTwo}>{theTime(props.timestamp)}</Text>
            <Text style={styles.columnThree}>{shortDate(props.timestamp)}</Text>
        </View>
    );
};

export default HistoryListItem;

const styles = StyleSheet.create({
    itemcontainer: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        borderLeftWidth: 10,
        margin: 2,
        backgroundColor: '#FFF'
    },
    columnOne: {
        flex: 2,
        textAlign: 'center',
        fontSize: 15
    },
    columnTwo: {
        flex: 1,
        marginLeft: 5,
        fontSize: 15
    },
    columnThree:{
        flex:1,
        fontSize:15,
        textAlign:'left'
    }
})