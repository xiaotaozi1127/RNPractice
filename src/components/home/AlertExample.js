import React, {Component} from 'react';
import {Alert, Text, TouchableOpacity, StyleSheet} from 'react-native';

class AlertExample extends Component {
	AlertItem (){
		Alert.alert('hello');
	}

	render() {
		return (
				<TouchableOpacity style= {styles.button}  onPress = {this.AlertItem} >
					<Text>
						alert
					</Text>
				</TouchableOpacity>
			)

	}
}

const styles = StyleSheet.create({
	button: {
	  backgroundColor: '#4ba37b',
      width: 100,
      height: 100,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100
	}
})

export default AlertExample