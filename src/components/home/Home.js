import React, { Component } from 'react'
import {
   View
} 
from 'react-native'
import SwitchExample from './SwitchExample'
import AlertExample from './AlertExample'
import AsyncStorage from './AsyncStorage'

export default class HomeContainer extends Component {
   
   render() {
      return (
         <View>
            <AsyncStorage />
         </View>
      );
   }
}