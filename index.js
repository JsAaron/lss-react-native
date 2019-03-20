/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './src/demo-js/app';
import App from './src/app';
import { name as appName } from './app.json';

console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

AppRegistry.registerComponent(appName, () => App);
