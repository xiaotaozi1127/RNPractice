import React, { Component } from 'react'
import {
   View
} 
from 'react-native'
import SwitchExample from './SwitchExample'

import AlertExample from './AlertExample'

export default class HomeContainer extends Component {
   
   render() {
      return (
         <View>
            <AlertExample />
         </View>
      );
   }
}