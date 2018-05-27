import React from 'react';
import { createMaterialTopTabNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';


export const Tabs = createDrawerNavigator ({
    NFC: {
        screen: NFCReaderScreen
    },
    Observations: {
        screen:ObservationsScreen
    }
});
