import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class List extends Component {
	state = {
		names: [
		{
			id: 0,
			name: 'Ben'
		},
		{
			id: 1,
			name: 'Susan'
		},
		{
			id: 2,
			name: 'Robert'
		},
		{
			id: 3,
			name: 'Mary'
		}
		]
	}

	alertItemName = (item) => {
		alert(item.name);
	}

	render() {
		return (
			<View>
				{
					this.state.names.map((item, index) => (
						<TouchableOpacity
		                     key = {item.id}
		                     style = {styles.container}
		                     onPress = {() => this.alertItemName(item)}>
		                     
		                     <Text style = {styles.text}>
		                        {item.name}
		                     </Text>
                  		</TouchableOpacity>

					))
				}
			</View>

		);

	}

}

const styles = StyleSheet.create({
	text: {
		color: '#4f603c'
	},
	container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
})

export default List;