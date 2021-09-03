import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GuildIcon } from '../GuildIcon';

import CalendarSvg from '../../assets/calendar.svg';
import PlayerSvg from '../../assets/player.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type GuildProps = {
    id: string,
    title: string,
    game: string, 
}

type AppointementProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    players: number
}

type Props = RectButtonProps & {
    item: AppointementProps
}

export function Appointment( { item, ...rest }: Props ) {
    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { item.guild.title }
                        </Text>

                        <Text style={styles.category}>
                            { item.category }
                        </Text>

                    </View>

                    <Text style={styles.game}>
                        { item.guild.game }
                    </Text>

                    <View style={styles.footer}>
                        <View style={styles.dateContainer}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                { item.date }
                            </Text>
                        </View>
                        
                    
                        <View style={styles.playersContainer}>
                            <PlayerSvg fill={theme.colors.primary}/>
                            <Text style={styles.players}>
                                { item.players }
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
        
    );
}