import React, {Component} from 'react';
import {View, Text} from 'react-native';

class HttpExample extends Component {
	state = {
		data: ""
	}

	componentDidMount = () => {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
	      })
	      .then((response) => response.json())
	      .then((responseJson) => {
	         this.setState({
	            data: responseJson.body
	         })
	      })
	      .catch((error) => {
	         console.error(error);
	      });
	}

	render () {
		return (
				<View>
					<Text>
						{this.state.data}
					</Text>
				</View>
			)
	}
}

export default HttpExample;