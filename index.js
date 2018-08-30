/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HorizonScrollView from './src/components/home/HorizonScrollView.js';
import HorizonFlatList from './src/components/home/HorizonFlatList.js';

AppRegistry.registerComponent(appName, () => HorizonFlatList);
