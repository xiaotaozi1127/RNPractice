import React, {Component} from 'react';
import {ScrollView, View, Text, Dimensions} from 'react-native';
import { compact, isEmpty, isNull, map, times } from "lodash";

export default class HorizonScrollView extends Component {
	render () {
		let screenWidth = Dimensions.get('window').width;
		let screenHeight = Dimensions.get('window').height;
		let children = [{
			color: '#5f9ea0',
			text: 'screen1'
		}, {
			color: 'tomato',
			text: 'screen2'
		},
		{
			color: '#663399',
			text: 'screen3'
		}]
		return (
			<ScrollView horizontal={true} pagingEnabled={true}>
				{
					map(children, (child, index) => (
						<View style = {{backgroundColor: child.color, 
								flex: 1,
								marginTop: 20,
								width: screenWidth,
								justifyContent: 'center',
								alignItems: 'center'
								}}>

							<Text style={{color: 'white', fontSize: 20, padding: 15}}>
								{child.text}
							</Text>
						</View>
					))
				}
			</ScrollView>
		);
	}
}

