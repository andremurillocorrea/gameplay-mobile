import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

import { categories } from '../../utils/categories';

import { styles } from './styles';



const appointments = [
    {
        id: '1',
        guild: {
            id: '1',
            title: 'Lendários',
            game: 'League of Legends', 
        },
        category: 'Ranqueada',
        date: 'Sex 18/06 às 21:00h',
        players: 3
    },
    {
        id: '2',
        guild: {
            id: '1',
            title: 'Lendários',
            game: 'League of Legends', 
        },
        category: 'Ranqueada',
        date: 'Sex 18/06 às 21:00h',
        players: 3
    },
]

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const data = appointments.filter((element) => { 
        if (category == '') {
            return true 
        } else {
            const [ selectedCategory ] = categories.filter((el) => el.id === category)
            return (element.category === selectedCategory.title)
        }
    })

    function handleCategorySelect(categoryId : string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentSelet() {
        navigation.navigate('AppointmentDetails');
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header} >
                    <Profile />
                    <ButtonAdd />
                </View>

                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader 
                        title={'Partidas agendadas'}
                    />
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <Appointment 
                                    item={item}
                                    onPress={handleAppointmentSelet}
                                />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={ListDivider}
                    >

                    </FlatList>

                </View>
            </View>
        </Background>
    );
}