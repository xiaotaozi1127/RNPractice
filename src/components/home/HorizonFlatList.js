import React, {Component} from 'react';
import {FlatList, View, Text, Dimensions} from 'react-native';
import { compact, isEmpty, isNull, map, times } from "lodash";

export default class HorizonFlatList extends Component {
	render() {
		let screenWidth = Dimensions.get('window').width;
		let screenHeight = Dimensions.get('window').height;
		return (
			<FlatList
				data={[
					{
						key: 'a', 
						color: '#5f9ea0',
						text: 'screen1'
					}, 
					{
						key: 'b',
						color: 'tomato',
						text: 'screen2'
					},
					{
						key: 'c',
						color: '#663399',
						text: 'screen3'
					}]}
  				renderItem={({item}) => <View style = {{backgroundColor: item.color, 
								flex: 1,
								marginTop: 20,
								width: screenWidth,
								justifyContent: 'center',
								alignItems: 'center'
								}}>

							<Text style={{color: 'white', fontSize: 20, padding: 15}}>
								{item.text}
							</Text>
						</View>}
  			/>
			)
	}
}