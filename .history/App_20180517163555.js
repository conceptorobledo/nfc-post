import React, { Component } from 'react';
import  { Text } from 'react-native';

import firebase from 'react-native-firebase';

//Logged In y LoggedOut
import Login from './src/screens/Auth/Login';
import { createStackNavigator} from 'react-navigation';
//import { AppStackNavigator } from './src/config/router';
import NFCReaderScreen from './src/screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from './src/screens/Observations/ObservationsScreen';

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
    if (this.state.user) return <AppStackNavigator />;
    // The user is null, so they're logged out */
    return <AppStackNavigator/>;
  }
}

const AppStackNavigator = createStackNavigator({
  Home: NFCReaderScreen,
  Observations: ObservationsScreen
})

export default App;