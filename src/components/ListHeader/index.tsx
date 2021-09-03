import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function ListHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Partidas agendadas'}</Text>
            <Text style={styles.subtitle}>{'Total 6'}</Text>
        </View>
        );
}