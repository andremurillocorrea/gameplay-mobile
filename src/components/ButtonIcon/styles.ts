import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapper: { 
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 17
    },
    title: {
        color: theme.colors.heading,
        flex: 1,
        fontSize: 15,
        paddingHorizontal: 30,
        fontFamily: theme.fonts.text500
    }
});