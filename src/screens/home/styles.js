import { StyleSheet } from 'react-native';

import theme from '../../utils/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e3e3e3'
    },
    btnNewProject: {
        marginRight: 25,
        color: theme.secondary
    },
    projectCard: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
        padding: 15,
        elevation: 2,
        height: 100
    }
});

export default styles;