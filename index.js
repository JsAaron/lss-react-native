/**
 * @format
 */

import { AppRegistry } from 'react-native';
import rootApp from './src/root';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => rootApp);
