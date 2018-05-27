import React from 'react';
import { createStackNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';
import Login from '../screens/Auth/LoginScreen';


export const AppStackNavigator = createStackNavigator ({
    Login: {
        screen: LoginScreen
    },
    NFC: {
        screen: NFCReaderScreen
    },
    Observations: {
        screen:ObservationsScreen
    }
});
