import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories';

import { Category } from '../Category';

import { styles } from './styles';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 24,
                paddingRight: 16
            }} // se desse um padding horizontal no style da view, não funcionaria no final do scroll
        >   
            {
                categories.map(category => {
                    return (
                        <Category
                            key={category.id}
                            title={category.title}
                            icon={category.icon}
                            checked={category.id === categorySelected}
                            onPress={() => setCategory(category.id)}
                        />
                    )
                })
            }

            
        </ScrollView>
    );
}