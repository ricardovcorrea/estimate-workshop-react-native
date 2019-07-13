
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Home, GasStation } from '../screens';

import theme from '../utils/theme';

const mainStack = createStackNavigator(
    {
        Home: { screen: Home },
        GasStation: { screen: GasStation }
    },
    {
        defaultNavigationOptions: {
            headerTitle: 'iGAS',
            headerStyle: {
                backgroundColor: theme.primary,
            },
            headerTitleStyle: {
                color: theme.secondary
            },
            headerTintColor: theme.secondary
        }
    }
);

const drawerStack = createDrawerNavigator({
    Main: { screen: mainStack }
})

export default AppNavigator = createAppContainer(drawerStack);