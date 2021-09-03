import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {

    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 5
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    status: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    },
    statusIcon: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8
    }
});