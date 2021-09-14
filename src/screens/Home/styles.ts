import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },
    content: {
        flex: 1, 
        marginTop: 16, 
    }
});