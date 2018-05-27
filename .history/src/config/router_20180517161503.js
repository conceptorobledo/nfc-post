import React from 'react';
import { createDrawerNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';


export const AppStackNavigator = createDrawerNavigator ({
    NFC: {
        screen: NFCReaderScreen
    },
    Observations: {
        screen:ObservationsScreen
    }
});
