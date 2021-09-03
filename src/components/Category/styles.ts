import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 120, 
        width: 104, 
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    }, content: {
        height: 116, 
        width: 100, 
        borderRadius: 8,
        backgroundColor: theme.colors.secondary40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7
    }, title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 15
    }, check: {
        width: 10,
        height: 10,
        alignSelf: 'flex-end',
        borderRadius: 3,
        backgroundColor: theme.colors.secondary100,
        borderColor:theme.colors.secondary50,
        borderWidth: 2,
        marginRight: 7,
    }, checked: {
        width: 10,
        height: 10,
        alignSelf: 'flex-end',
        borderRadius: 3,
        backgroundColor: theme.colors.primary,
        marginRight: 7,
    }
})