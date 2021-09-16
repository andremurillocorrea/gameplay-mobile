import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 85,
        backgroundColor: theme.colors.overlay
    },
    header: {
        height: 39,
        width: '100%',
        marginTop: 13,
        alignItems: 'center'
    },
    bar: {
        width: 39,
        height: 2,
        backgroundColor: theme.colors.secondary30,
        borderRadius: 8
    },
    content: {
        flex: 1,
        paddingHorizontal: 24
    }
})