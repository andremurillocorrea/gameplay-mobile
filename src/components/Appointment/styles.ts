import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 69,
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    category: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        lineHeight: 17
    },
    game: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        lineHeight: 17
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    date: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        lineHeight: 17,
        marginLeft: 13
    },
    players: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        lineHeight: 17,
        marginLeft: 6
    },
    dateContainer: {
        flexDirection: 'row'
    },
    playersContainer: {
        flexDirection: 'row'
    }

});