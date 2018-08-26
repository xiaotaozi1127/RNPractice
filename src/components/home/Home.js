import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import PresentationalComponent from './PresentationalComponent.js';
import { Actions } from 'react-native-router-flux';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Home extends Component {
	state = {
		myState: "my state"
	}
	updateState = () => {this.setState({myState: 'updated state'})}
	onPress = () => alert('click button');
	goToAbout = () =>  Actions.about()
	render() {
		return (
			<TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
	         <Text>This is HOME!</Text>
	      </TouchableOpacity>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	redbox: {
		backgroundColor: 'red',
		width: 100,
		height: 100
	},
	bluebox: {
		backgroundColor: 'blue',
		width: 100,
		height: 100
	},
	blackbox: {
		backgroundColor: 'black',
		width: 100,
		height: 100
	}

})

export default Home;