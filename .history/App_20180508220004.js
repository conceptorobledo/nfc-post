import React, { Component } from 'react';
import firebase from 'react-native-firebase';

//Logged In y LoggedOut
import { Tabs } from './src/config/router';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }
  render() {
    return <Tabs/>
  }
}

export default App;