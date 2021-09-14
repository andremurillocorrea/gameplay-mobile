import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: 24,
    },
    label: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        marginBottom: 12,
        marginTop: 28,
    },
    serverContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 68,
        // backgroundColor: 'green',
        borderColor: theme.colors.secondary60,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 32,
        paddingRight: 28 
        // overflow: 'hidden'
    },
    serverText: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
    },
    iconHolder: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary80,
        borderColor: theme.colors.secondary60,
        borderWidth: 1,
        borderRadius: 8,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        backgroundColor: theme.colors.secondary80,
        height: 48,
        width: 140,
        color: theme.colors.highlight,
        borderColor: theme.colors.secondary60,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
    },
    textAreaHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    maxCaracters: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        color: theme.colors.highlight,
        marginBottom: 12,
        marginTop: 28,
    },
    textAreaInput: {
        backgroundColor: theme.colors.secondary80,
        height: 95,
        width: '100%',
        color: theme.colors.highlight,
        borderColor: theme.colors.secondary60,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 56
    },
    footer: {
        marginBottom: 56
    }
});