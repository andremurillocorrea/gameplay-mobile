import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AuthProvider } from '../hooks/auth';

export function Routes() {
    return (
        <NavigationContainer >
            <AuthProvider>
                <AuthRoutes />
            </AuthProvider>
        </NavigationContainer>
    );
}