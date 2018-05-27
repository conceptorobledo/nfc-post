import React from 'react';
import { createStackNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';


export const AppStackNavigator = createStackNavigator ({
    NFC: {
        screen: NFCReaderScreen
    },
    Observations: {
        screen:ObservationsScreen
    }
});
