import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { Signin } from '../screens/Signin';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

type RootStackParamList = {
    Home: undefined,
    Signin: undefined,
    AppointmentDetails: undefined,
    AppointmentCreate: undefined,
};

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

export function AuthRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();
 
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name='Signin'
                component={Signin}
            />
            <Screen
                name='Home'
                component={Home} 
            />
            <Screen
                name='AppointmentDetails'
                component={AppointmentDetails} 
            />
            <Screen
                name='AppointmentCreate'
                component={AppointmentCreate} 
            />
        </Navigator>
    );
}