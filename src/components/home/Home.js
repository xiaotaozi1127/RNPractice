import React, { Component } from 'react'
import {
   View
} 
from 'react-native'
import SwitchExample from './SwitchExample'

export default class HomeContainer extends Component {
   constructor() {
      super();
      this.state = {
         switch1Value: false,
         switch2Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }
   toggleSwitch2 = (value) => {
      this.setState({switch2Value: value})
      console.log('Switch 2 is: ' + value)
   }
   render() {
      return (
         <View>
            <SwitchExample
               toggleSwitch1 = {this.toggleSwitch1}
               toggleSwitch2 = {this.toggleSwitch2}
               switch1Value = {this.state.switch1Value}
               switch2Value = {this.state.switch2Value}/>
         </View>
      );
   }
}