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

import { useAuth } from '../../hooks/auth';

import { categories } from '../../utils/categories';

import { styles } from './styles';




const appointments = [
    {
        id: '1',
        guild: {
            id: '1',
            name: 'Lendários',
            game: 'League of Legends', 
            icon_uri: 'https://static.wikia.nocookie.net/leagueoflegends/images/0/07/League_of_Legends_icon.png/revision/latest/smart/width/250/height/250?cb=20191018194326'
        },
        category: 'Ranqueada',
        date: 'Sex 18/06 às 21:00h',
        players: 3
    },
    {
        id: '2',
        guild: {
            id: '2',
            name: 'Turma do Valorão',
            game: 'Valorant', 
            icon_uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAACBgYGnp6f29vbw8PBra2uioqJ9fX1LS0v8/Pzi4uLV1dW5ubnz8/MYGBiOjo5EREQyMjLBwcGXl5eenp5oaGjS0tJNTU3MzMzq6upgYGA/Pz93d3ciIiJaWlqvr68rKysLCwvc3Nw4ODi9vb0VFRWSkpIeHh7mt0NXAAAGPUlEQVR4nO2cfV+iTBSGmRDtMbPS0sxMzXbr+3/CR+bMOzMoOKzM7n390S8RD+cCvIERzTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICnG7K6bwovbbuo2ZsDYuIu6ObvpomwLjoZPHZSdsD4ZdtDLtJOq7SgN2X3sqrO+GcZOmyHrnWHctMlZDw1jps2E9dEwYj/T6BUvQxrGS5tZXw1jpc2Q9dYwTtrkrMeGMdJmwvpsGKGnadRqcTANL0+bWd8NL02bIeu94WVpk7MEDC9JmwlLwfCCvqbRKsXFNWyfNrNUDNumzdCt01/DdmmTV8r02LBN2kyqZXps2KI3N2X6btg8bdyU6b1h07SppEz/DZulTTVlEjBskjaelEnAsEF/vpRJwfD8tPGlTBKG56aNN2XSMDwvbfwpk4jhOWkTSJlEDM/oMZQyqRieTptQyiRjeCptginTJ8PsvVaxNm3CKVOy+lMGp6h7KzH2X80ra1LmSF9uVDiyrG00vK/Vr5oubg5ozai21WDa1KVMRzd4tKY2MEJp0+pFV2PffHPUp0z0Wx8upXna1KdMbw4UmqZpk1DKSBqmTUopI2kUHGmljGR//mZJLGUk56dN21OEq3N24/eLYZj8egKnaXlukxJpBkgjUjwINCPBA3lTko3J80HaXLu9GCBt/gKSu/RrDtLm2u3F4F9Pm7pR4mRA2ly7vRggba7dXgSQNtduLwZIm2u3F4N/PW3er91eDIrvmxqu3R0AAAAAAAAAAABA/xkXRTGwJxUlY+PRODQnsXrerBc3O3vMcFpUGOtnfF1Ms0oB1Y1BU8HsthwLs6YszDHOlR4q21TmLBncqBG1vTH06xt7W9NT/H9H57Gc9mjVLae8eO5M+mhqeOP2/cLr/KIHb/wBffRQXReZe4vsXm1Hn+GCPzOmOT2GbG5M4QVGvnuv1hcaUkW5On+fMFy4i5dNnjIUD2xD9qanDISh5zOR54sMC17jVTzasnrDrVytt5snW/GkYdl9xfCzaui7f87c1o0N9+aCxHKDhvT8nr56Nn6mme+04eNhQhxWVUO2rBqqVasNMyrA3w33op6xqRsbWikzl70EDA/8ST2eXXxwYW2o73P+8hiaaSMNddooQ6OXQyMzr6EnZR7Chk+24LH5T76mq4b00dRBG37qdWEbqj3QZzi52HBpbRSeMqNt0JBvwplVTE+yDClwxbGEG45ey79D25B2oLcODT0ps+Ubym/Iu3K+/jmUPZqGFIfye5Tc8JmOiiOrVsb38s8ODfd8qeLM47v8/yerMXxnVvhx+F6wsw0pVtWtisLwjk+VaUOG5iruwtCTMm91huXDjVtO7uaG4cxcccowu+eTp6YhnUFR2nRgSJ/FWylT7oJBQ3laZfMp3l7acGiuOMOQljyzDDM64sw7MfSkDF/v9YYjt9wPo6OCMrRSxjKkDUZps5S113LfiW5IbwF574s4V/mqM8zUDpU5EzeG4dh4a9mGtERp8SJry7SJbrg33yzfYuHlCg4blkdK91bnO7nrqm04Cm3DH7kQ6nstasu0iW3oP5cpewwb8qsp53KNv4+W2Rnvw61eCKXNh6gt0yau4Y5XtVJmTXF+9xo0nMs90oDJeYwstXYPYZjzTftAP0RBaVPI2pQ293ENOTJlHvjCs4xrP3wFDUnHOuQvaPVnnuOhur2NG/JTmmOg0GqktFFnnWvVUlxDO2XK85KN/VTFkLb8xK01dgydmNZn3uVBgY6KzlcRP7oxtFKGzn/lT32Erp7oeXlB+kYbZpe5hnbaKMNHY/l27zJm4xpaKfNtN2MY/jwIShP1K+2/lqudiA5xNm1fW5hBJovKIwhdOtvjNqsODMUKppTZyicPFUPFVs9uIgdRnOvDvd5NhKE6o6XH9jWKSJuYhm7KSHYhQzHPwPnNGjWE4hgaaSMM9XW6mTaKdTzDW62QZa/OwkXaGKOJEjXPzpj4qo96hd2gSJtbZWgOtVDaOKe4P/Y0brjM2rAc5Xkux2pfjv+P7JHd3XHSXM9JWPPMNzz7nr6tF46cufirece5qqgq8Jp2X1N7MUVZzxlk/aMM/oY7SAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADE5X+b6USrExhvOQAAAABJRU5ErkJggg=='
        },
        category: 'Ranqueada',
        date: 'Qui 17/06 às 19:00h',
        players: 2
    },
]

export function Home() {
    const [category, setCategory] = useState('');
    const { user } = useAuth();

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

    function handleAppointmentSelect() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        console.log(user)
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header} >
                    <Profile />
                    <ButtonAdd 
                        onPress={handleAppointmentCreate}
                    />
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
                                    onPress={handleAppointmentSelect}
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