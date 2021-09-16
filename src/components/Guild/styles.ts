import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        lineHeight: 25
    }
});