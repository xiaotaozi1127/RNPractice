import React, {Component} from 'react';
import {ScrollView, View, Text, Dimensions} from 'react-native';

export default class HorizonScrollView extends Component {
	render () {
		let screenWidth = Dimensions.get('window').width;
		let screenHeight = Dimensions.get('window').height;
		return (
			<ScrollView horizontal={true} pagingEnabled={true}>
				<View style = {{backgroundColor: '#5f9ea0', 
								flex: 1,
								marginTop: 20,
								width: screenWidth,
								justifyContent: 'center',
								alignItems: 'center'
								}}>
					<Text style={{color: 'white', fontSize: 20, padding: 15}}>
						Screen 1
					</Text>
				</View>
				<View style = {{backgroundColor: 'tomato', 
								flex: 1,
								marginTop: 20,
								width: screenWidth,
								justifyContent: 'center',
								alignItems: 'center'
								}}>
					<Text style={{color: 'white', fontSize: 20, padding: 15}}>
						Screen 2
					</Text>
				</View>
				<View style = {{backgroundColor: '#663399', 
								flex: 1,
								marginTop: 20,
								width: screenWidth,
								justifyContent: 'center',
								alignItems: 'center'
								}}>
					<Text style={{color: 'white', fontSize: 20, padding: 15}}>
						Screen 3
					</Text>
				</View>

			</ScrollView>
		);
	}
}

