import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';

import { Category } from '../Category';

import { styles } from './styles';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
        >   
            {
                categories.map(category => {
                    return (
                        <Category
                            key={category.id}
                            title={category.title}
                            icon={category.icon}
                            checked={category.id === categorySelected}
                            hasCheckBox={hasCheckBox}
                            onPress={() => setCategory(category.id)}
                        />
                    )
                })
            }

            
        </ScrollView>
    );
}