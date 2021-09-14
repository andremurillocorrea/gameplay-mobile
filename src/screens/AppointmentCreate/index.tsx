import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Entypo } from '@expo/vector-icons'


import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { CategorySelect } from '../../components/CategorySelect';
import { Button } from '../../components/Button';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId : string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <Header 
                    title='Agendar partida'
                />
                <ScrollView 
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.label}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <RectButton>
                        <View style={styles.serverContainer}>
                            <View style={styles.iconHolder}>

                            </View>
                            <Text style={styles.serverText}>
                                Selecione um servidor
                            </Text>
                            <Entypo
                                name='chevron-right'
                                size={18}
                                color={theme.colors.heading} 
                            />

                        </View>
                    </RectButton>

                    <View style={styles.dateContainer}>
                        <View>
                            <Text style={styles.label}>
                                Dia e mês
                            </Text>

                            <TextInput 
                                style={styles.input}
                                placeholder='dd/mm'
                                placeholderTextColor={theme.colors.highlight}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>
                                Horário
                            </Text>

                            <TextInput 
                                style={styles.input}
                                placeholder='hh:mm'
                                placeholderTextColor={theme.colors.highlight}
                            />
                        </View>
                    </View>

                    <View style={styles.textAreaHeader}>
                        <Text style={styles.label}>
                            Descrição
                        </Text>
                        
                        <Text style={styles.maxCaracters}>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <TextInput 
                        style={styles.textAreaInput}
                    />

                    <View style={styles.footer}>
                        <Button
                            title='Agendar'
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Background>
    );
}

