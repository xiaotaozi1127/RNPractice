import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PresentationalComponent from './PresentationalComponent.js';

class Home extends Component {
	state = {
		myState: "my state"
	}
	updateState = () => {this.setState({myState: 'updated state'})}
	render() {
		return (
			<View>
				<PresentationalComponent myState = {this.state.myState} updateState = 
               {this.updateState}/>
			</View>
			);
	}
}

export default Home;