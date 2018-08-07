import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class StatusBox extends Component {

    state = {
        statusColor: '#03A9F4'
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.reading === this.props.reading) {
            return;
        }
        const readingStatus = this.props.reading;
        switch (readingStatus) {
            case 'ok':
                this.setState({ statusColor: '#4cae4c' });
                break;
            case 'error':
                this.setState({ statusColor: '#ff4d04' });
                break;
            default:
                this.setState({ statusColor: '#03A9F4' });
                break;
        }
    }

    render() {

        return (
            <View style={[styles.container, { backgroundColor: this.state.statusColor }]}>
                <View style={styles.center}>
                    <Text style={styles.text}></Text>
                </View>
            </View>
        );
    }
}

export default StatusBox;

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