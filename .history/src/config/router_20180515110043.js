import React from 'react';
import { createBottomTabNavigator  } from 'react-navigation';

import NFCReader from '../screens/NFCReader/NFCReader';

export default Tabs = createBottomTabNavigator ({
    NFC: {
        screen: NFCReader,
        navigationOptions:{
            tabBarLabel: 'Lector'
        }
    }
});