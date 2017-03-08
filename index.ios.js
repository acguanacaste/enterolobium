/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Home from './src/Home'
import Familias from './src/Familias'

export default class enterolobium extends Component {

_renderScene(route,navigator){
   var globalProps = {navigator}

   switch (route.name) {
     case 'Home':
     return(
       <Home
        {...globalProps}
       />
     )
     case 'Familias':
     return(<Familias 
     {...globalProps}
     />)

   }
 }

 _configureScene(route,routeStack){
   switch (route.name) {
     case 'Home':
       return Navigator.SceneConfigs.FloatFromBottom
    case 'Familias':
       return Navigator.SceneConfigs.FloatFromBottom

     default:
       return Navigator.SceneConfigs.PushFromRigth

   }
 }

  render() {
    return (
    <Navigator
      initialRoute={{name: 'Home'}}
      renderScene= {this._renderScene}
      configureScene={this._configureScene}
    />
    );
  }
}


AppRegistry.registerComponent('enterolobium', () => enterolobium);
