import React, { Component } from 'react';
import  { Text } from 'react-native';

import firebase from 'react-native-firebase';

//Logged In y LoggedOut
import Login from './src/screens/Auth/Login';
import NFCReader from './src/screens/NFCReader/NFCReaderScreen'
//import { Tabs } from './src/config/router';
import { createBottomTabNavigator } from 'react-navigation';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  /**
     * When the App component mounts, we listen for any authentication
     * state changes in Firebase.
     * Once subscribed, the 'user' parameter will either be null 
     * (logged out) or an Object (logged in)
     */
  componentDidMount() {
    this.authSubscription =
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loading: false,
          user
        });
      });
  }

  /**
  * Don't forget to stop listening for authentication state changes
  * when the component unmounts.
  */
  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    /* // The application is initialising
    if (this.state.loading) return null;
    // The user is an Object, so they're logged in
    if (this.state.user) return <Tabs />;
    // The user is null, so they're logged out */
    return <Tabs/>;
  }

}
const Tabs = <Text>Hola</Text>;


export default App;