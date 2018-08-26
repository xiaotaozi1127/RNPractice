import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'; 

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
class Inputs extends Component {
	state = {
		email: '',
		password: ''
	}

	handleEmail = (text) => {
		this.setState({
			email: text
		})
	}

	handlePassword = (text) => {
		this.setState({
			password: text
		})
	}

	login (email, password){
		alert("email = " + email + "; password = " + password);
	}

	render() {
		return (
				<View style = {styles.container}> 
					<TextInput  style = {styles.input}
						placeholder = "Email"
						onChangeText = {this.handleEmail}
					 />
					 <TextInput  style = {styles.input}
					 	placeholder = "Password"
						onChangeText = {this.handlePassword}
					 />
					 <TouchableOpacity 
					 style = {styles.submitButton} 
					 onPress = {
					 	() => this.login(this.state.email, this.state.password)
					 }>
					 <Text style= {styles.submitButtonText}>
					 	Submit
					 </Text>

					 </TouchableOpacity>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 23
	},
	input: {
		margin: 25,
		height: 40,
		borderColor: '#7a42f4',
		borderWidth: 1,
	},
	submitButton: {
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 15,
		height: 40,
	},
	submitButtonText: {
		color: 'white'
	}
})

export default Inputs;