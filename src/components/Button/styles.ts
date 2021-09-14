import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.colors.heading,
        fontSize: 15,
        paddingHorizontal: 30,
        fontFamily: theme.fonts.text500
    }
});