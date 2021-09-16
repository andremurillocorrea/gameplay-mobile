import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

type Props = {
    icon_uri: string
}

export function GuildIcon({icon_uri}: Props) {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: icon_uri}} 
                resizeMode='cover'   
            />
        </View>
    );
}