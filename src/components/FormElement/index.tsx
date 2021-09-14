import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    title?: string,
    subtitle?: string,
    children?: ReactNode
}

export function FormElement({title, subtitle, children}: Props) {
    return (
        <View style={styles.container}>
            { (title || subtitle) && <View style={styles.header}>
                <Text style={styles.title}>
                    { title ? title : '' }
                </Text>
                <Text style={styles.subtitle}>
                    { subtitle ? subtitle : ''}
                </Text>
            </View>
            }
            <View style={styles.content}>
                { children }
            </View>

        </View>
    );
}