import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';
import ObservationsScreen from '../screens/Observations/ObservationsScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

export const AppStackNavigator = createStackNavigator({
    NFC: {
        screen: NFCReaderScreen
    },
    Settings: {
        screen: SettingsScreen
    },
    Observations: {
        screen: ObservationsScreen
    }
});
