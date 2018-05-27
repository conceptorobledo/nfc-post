import React from 'react';
import { createMaterialTopTabNavigator  } from 'react-navigation';

import NFCReaderScreen from '../screens/NFCReader/NFCReaderScreen';


export const Tabs = createDrawerNavigator ({
    NFC: {
        screen: NFCReaderScreen
    }
});
