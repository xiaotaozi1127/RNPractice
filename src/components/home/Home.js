import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Home extends Component {
	state = {
		mystate: "my state"
	}
	render() {
		return (
			<View>
				<Text>
					{this.state.mystate}
				</Text>
			</View>
			);
	}
}

export default Home;