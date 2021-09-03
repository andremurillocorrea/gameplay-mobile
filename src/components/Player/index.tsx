import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

import { theme } from "../../global/styles/theme";
import { Background } from '../Background';

// const statusDict = {
//     'Disponível': theme.colors.on,
//     'Ocupado': theme.colors.busy,
//     'Indisponível': theme.colors.primary
// }

type PlayerProps = {
    id: string,
    name: string,
    status: string,
    avatar_url: string
}

type Props = {
    item: PlayerProps
}

export function Player({ item }: Props) {
    return (
        <View style={styles.container}>
            <Avatar 
                urlImage={item.avatar_url}
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <View style={styles.footer}>
                    <View style={[
                        styles.statusIcon, 
                        item.status === 'Disponível' ? {backgroundColor: theme.colors.on} : {backgroundColor: theme.colors.primary}
                    ]}/>
                    <Text style={styles.status}>{item.status}</Text>
                </View>
            </View>
        </View>
    );
}