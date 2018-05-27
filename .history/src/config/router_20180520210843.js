import React from 'react';
import { createStackNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';
import LoginScreen from '../screens/Auth/LoginScreen';


export const AppStackNavigator = createStackNavigator ({
    NFC: {
        screen: NFCReaderScreen
    },
    Login: {
        screen: LoginScreen
    },
    Observations: {
        screen:ObservationsScreen
    }
});
