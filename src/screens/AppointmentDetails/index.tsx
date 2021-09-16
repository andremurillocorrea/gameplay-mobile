import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Player } from '../../components/Player';

import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


const data = [
    {
        id: '1',
        name: 'Gabriel Oliveira',
        status: 'Disponível',
        avatar_url: 'https://github.com/oliveigah.png'
    },
    {
        id: '2',
        name: 'Diego Fernandes',
        status: 'Indisponível',
        avatar_url: 'https://github.com/diego3g.png'
    },
    {
        id: '3',
        name: 'Rodrigo Gonçalves',
        status: 'Disponível',
        avatar_url: 'https://github.com/rodrigorgtic.png'
    },
]

export function AppointmentDetails() {
    return (
        <Background>
            <View style={styles.container}>
                <Header 
                    title='Lendários'
                    action={
                        <BorderlessButton>
                            <Fontisto name='share' size={24} color={theme.colors.primary}/>
                        </BorderlessButton>
                    }
                />
                <ImageBackground
                    style={styles.banner}
                    source={BannerImg}
                >
                    <View style={styles.content}>                   
                        <Text style={styles.title}>
                            {'League of Legends'}
                        </Text>
                        <Text style={styles.subtitle}>
                            {'É hoje que vamos chegar ao challenger sem perder uma partida da md10'}
                        </Text>
                    </View>
                </ImageBackground>

                <View style={styles.list}>
                    <ListHeader 
                        title={'Jogadores'}
                    />

                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return <Player item={item} />
                        }}
                        ItemSeparatorComponent={ListDivider}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <View style={styles.footer}>
                    <ButtonIcon 
                        title='Entrar no servidor do Discord'
                    />
                </View>
            </View>
        </Background>

    );
}

