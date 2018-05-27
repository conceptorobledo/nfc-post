import React from 'react';
import { createStackNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';


export const AppStackNavigator = createStackNavigator ({
    Observations: {
        screen:ObservationsScreen
    },
    NFC: {
        screen: NFCReaderScreen
    }
    
});
