import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import store from './src/store/store';
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent('nfcpost', () => RNRedux);