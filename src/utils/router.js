
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Home, Project } from '../screens';

import theme from '../utils/theme';

const mainStack = createStackNavigator(
    {
        Home: { screen: Home },
        Project: { screen: Project }
    },
    {
        defaultNavigationOptions: {
            headerTitle: 'Estimate',
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

export default AppNavigator = createAppContainer(mainStack);