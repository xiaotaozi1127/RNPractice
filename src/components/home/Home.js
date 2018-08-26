import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PresentationalComponent from './PresentationalComponent.js';
import List from './List.js';

class Home extends Component {
	state = {
		myState: "my state"
	}
	updateState = () => {this.setState({myState: 'updated state'})}
	render() {
		return (
			<View style= {styles.container}>
				<List />
				<View style = {styles.redbox}/>
				<PresentationalComponent myState = {this.state.myState} updateState = 
               {this.updateState}/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		backgroundColor: 'grey',
		height: 600,
		width: 300
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