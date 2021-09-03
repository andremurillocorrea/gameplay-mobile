import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 234,
        justifyContent: 'flex-end'
    },
    content: {
        paddingHorizontal: 24
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 28,
        marginBottom: 12
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        lineHeight: 21,
        marginBottom: 24
    },
    list: {
        paddingHorizontal: 24,
        flex: 1
    },
    footer: {
        width: '100%',
        height: 56,
        paddingHorizontal: 24,
        marginTop: 15,
        marginBottom: getBottomSpace() + 15
    }
});