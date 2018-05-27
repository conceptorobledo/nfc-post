import React from 'react';
import { TabNavigator } from 'react-navigation';

import Notifications from '../screens/NFCReader/NFCReader';

export const Tabs = TabNavigator({
    NFC: {
        screen: NFCReader,
        navigationOptions:{
            tabBarLabel: 'Notificaciones'
        }
    }
});