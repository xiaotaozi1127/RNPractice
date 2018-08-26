import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import PresentationalComponent from './PresentationalComponent.js';
import List from './List.js';
import Inputs from './Inputs.js';
import ScrollViewExample from './ScrollViewExample';
import ImagesExample from './ImagesExample';
import HttpExample from './HttpExample';
import Animations from './Animations'
import WebViewExample from './WebViewExample'
import ModalExample from './ModalExample'
import ActivityIndicatorExample from './ActivityIndicatorExample'
import PickerExample from './PickerExample'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Home = () => {
	return (
			<PickerExample />
		)
}

export default Home;