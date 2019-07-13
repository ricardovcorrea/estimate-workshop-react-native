import { StyleSheet } from 'react-native';

import theme from '../../utils/theme';

const styles = StyleSheet.create({
    gasStationName: {
        fontWeight: '700',
        marginBottom: 5,
        marginLeft: 5,
        fontSize: 20
    },

    btnRate: {
        marginRight: 15,
        fontSize: 16,
        color: theme.secondary
    },
    photo: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: 'black'
    },
    sectionTitle: {
        fontWeight: '700',
        marginLeft: 5,
        fontSize: 20,
        marginTop: 15,
        marginBottom: 5
    },
    addressText: {
        marginBottom: 5
    }
});

export default styles;