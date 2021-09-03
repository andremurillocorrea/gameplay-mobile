import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 84, 
        width: '100%',
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    content: {
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 20
    }
});