import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import PresentationalComponent from './PresentationalComponent.js';
import List from './List.js';
import Inputs from './Inputs.js';
import ScrollViewExample from './ScrollViewExample';
import ImagesExample from './ImagesExample';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Home extends Component {
	state = {
		myState: "my state"
	}
	updateState = () => {this.setState({myState: 'updated state'})}
	render() {
		return (
			<View style= {styles.container}>
				<ImagesExample />
			</View>
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
		backgroundColor: 'grey',
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