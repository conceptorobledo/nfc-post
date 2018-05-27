import React from 'react';
import { TabNavigator } from 'react-navigation';



export const Tabs = TabNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions:{
            tabBarLabel: 'Notificaciones'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions:{
            tabBarLabel: 'Mi Perfil'
        }
    }
});