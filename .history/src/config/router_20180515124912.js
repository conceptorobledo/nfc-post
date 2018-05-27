import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';


export const Tabs = createStackNavigator({
    NFC: {
        screen: NFCReaderScreen
    }
});
