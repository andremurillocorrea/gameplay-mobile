import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked?: boolean,
    hasCheckBox?: boolean
}

export function Category({title, icon: Icon, checked = false, hasCheckBox = false, ...rest}: Props) {
    const { secondary40, secondary80 } = theme.colors 

    return (
        <RectButton underlayColor='transparent' {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary40, secondary80]}
            >
                <LinearGradient 
                    style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
                    colors={[secondary80, secondary40]}
                >
                    {
                        hasCheckBox &&
                        <View style={[styles.check, {
                            backgroundColor: checked ? theme.colors.primary : theme.colors.secondary80,
                            borderWidth: checked ? 0 : 1
                        }]}/>
                    }
                    <Icon width={48} height={48}/>
                    <Text style={styles.title}>
                        { title }
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    );
}