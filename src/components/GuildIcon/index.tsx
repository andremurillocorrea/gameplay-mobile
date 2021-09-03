import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: 'https://static.wikia.nocookie.net/leagueoflegends/images/0/07/League_of_Legends_icon.png/revision/latest/smart/width/250/height/250?cb=20191018194326'}} 
                resizeMode='cover'    
            />
        </View>
    );
}