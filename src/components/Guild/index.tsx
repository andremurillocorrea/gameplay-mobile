import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string,
    name: string,
    game: string, 
    icon_uri: string
}

type Props = TouchableOpacityProps & {
    guild: GuildProps
}

export function Guild({guild, ...rest}: Props) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest} >
            <View style={styles.content}>
                <GuildIcon icon_uri={guild.icon_uri}/>
                <View>
                    <Text style={styles.title}>{guild.name}</Text>
                    <Text style={styles.subtitle}>{guild.game}</Text>
                </View>
            </View>
            <Feather
                name='chevron-right'
                size={24}
                color={theme.colors.highlight}
            />   

        </TouchableOpacity>
    );
}