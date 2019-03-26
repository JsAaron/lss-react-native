/**
 * @format
 */

import { AppRegistry } from 'react-native';

import App from './src/app';
// import App from './ts-demo/app';

import { name as appName } from './app.json';

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent(appName, () => App);
