import React from 'react';
import { createBottomTabNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';

export const Tabs = createBottomTabNavigator ({
    NFC: {
        screen: NFCReaderScreen
    }
});