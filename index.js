import { YellowBox } from 'react-native';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
YellowBox.ignoreWarnings(['Async']);