import React, {Component} from 'react';
import GoogleApiWrapper from './Maps.js'
import Demo from '../src/GeoLocater.js'

export default class Spots extends Component{
render(){
  return(
    <div>
    <Demo />
    <GoogleApiWrapper />
    </div>
  )
}
}
