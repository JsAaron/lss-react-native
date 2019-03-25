/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './src/demo-js/app';
import App from './src/app';
import { name as appName } from './app.json';

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent(appName, () => App);
