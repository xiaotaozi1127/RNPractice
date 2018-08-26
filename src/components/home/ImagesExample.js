import React, { Component } from 'react'
import { Image } from 'react-native'

const Home = () => (
   <Image source = {require('../../img/bridge.jpg')} 
   		  style = {{ width: 200, height: 200 }}/>
)
export default Home