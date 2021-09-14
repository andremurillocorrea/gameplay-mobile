import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { Button } from '../../components/Button';
import { FormElement } from '../../components/FormElement';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


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
                    <FormElement title='Categoria'>
                        <CategorySelect
                            hasCheckBox
                            categorySelected={category}
                            setCategory={handleCategorySelect}
                        />
                    </FormElement>

                    <FormElement>
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
                    </FormElement>

                    <View style={styles.dateContainer}>
                        <FormElement title='Dia e mês'>
                            <TextInput 
                                style={styles.input}
                                placeholder='dd/mm'
                                placeholderTextColor={theme.colors.highlight}
                            />
                        </FormElement>

                        <FormElement title='Horário'>
                            <TextInput 
                                style={styles.input}
                                placeholder='hh:mm'
                                placeholderTextColor={theme.colors.highlight}
                            />
                        </FormElement>
                    </View>

                    <FormElement title='Descrição' subtitle='Max 100 caracteres'>
                        <View>
                            <TextInput 
                                style={styles.textAreaInput}
                            />
                        </View>
                        
                    </FormElement>

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

