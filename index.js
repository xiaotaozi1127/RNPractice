/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HorizonScrollView from './src/components/home/HorizonScrollView.js';

AppRegistry.registerComponent(appName, () => HorizonScrollView);
