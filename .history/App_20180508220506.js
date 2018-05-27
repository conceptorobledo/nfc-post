import React, { Component } from 'react';
import firebase from 'react-native-firebase';

//Logged In y LoggedOut
import { Tabs } from './src/config/router';

class App extends Component {
  constructor(){
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
  componentDidMount(){
    this.authSubscription = 
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading:false,
        user
      });
    });
  }

  render() {
    return <Tabs/>
  }
}

export default App;