/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FetchLocation from './components/FetchLocation';

export default class App extends Component {

  constructor() {

    super();
    this.state = {};

  }

  getUserLocation = () => {

    navigator.geolocation.getCurrentPosition( position => {

      console.log( 'position', position );
    }, err => console.log( err ));

  }

  render() {

    return (
      <View style={ styles.container }>
        <FetchLocation onGetLocation={ this.getUserLocation } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
