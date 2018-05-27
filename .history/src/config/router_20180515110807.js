import React from 'react';
import { createBottomTabNavigator  } from 'react-navigation';

import NFCReader from '../screens/NFCReader/NFCReaderScreen';

export const Tabs = createBottomTabNavigator ({
    NFC: {
        screen: NFCReader,
        navigationOptions:{
            tabBarLabel: 'Lector'
        }
    }
});