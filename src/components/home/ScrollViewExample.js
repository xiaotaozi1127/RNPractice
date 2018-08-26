import React, {Component} from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewExample extends Component {
	state = {
		names: [
		 {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12},
         {'name': 'Debra1', 'id': 13},
         {'name': 'Aron1', 'id': 14},
         {'name': 'Ann1', 'id': 15},
         {'name': 'Steve1', 'id': 16},
         {'name': 'Olivia1', 'id': 17}
		]
	}

	render(){
		return (
				<View>
					<ScrollView>
		               {
		                  this.state.names.map((item, index) => (
		                     <View key = {item.id} style = {styles.item}>
		                        <Text>{item.name}</Text>
		                     </View>
		                  ))
		               }
            		</ScrollView>
				</View>
			)


	}

}

const styles = StyleSheet.create({
	item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})

export default ScrollViewExample;