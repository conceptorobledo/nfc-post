import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tabs } from './src/config/router';


class App extends Component {
  render() {
    return <Tabs/>
  }
}

export default App;