import React, { Component } from 'react'
import { View, LayoutAnimation, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'

class Animations extends Component {
   state = {
      myStyle: {
         height: 100,
         backgroundColor: 'red'
      }
   } 

   componentWillMount = () => {
      this.animatedWidth = new Animated.Value(50)
      this.animatedHeight = new Animated.Value(100)
   }

   animatedBox = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 200,
         duration: 1000
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 500,
         duration: 500
      }).start()
   }

   expandElement = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
         myStyle: {
            height: 400,
            backgroundColor: 'red'
         }
      })
   }
   collapseElement = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      
      this.setState({
         myStyle: {
            height: 100,
            backgroundColor: 'red'
         }
      })
   }
   render() {
      const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})

export default Animations