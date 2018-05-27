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