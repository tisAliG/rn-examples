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
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {

    super();
    this.state = { resultText: '' };

  }

  createNumButtons() {

    const nums = [ [1,2,3], [4,5,6], [7,8,9], [0, '.', '='] ];

    const rows = nums.map( array => {

      const numbersMarkup = array.map( num => {

        return(
          <TouchableOpacity
            onPress={ () => this.buttonPressed( num ) }
            style={ styles.btn }
            key={ `num-${ num }` }>
            <Text style={ styles.btnText }>
              { num }
            </Text>
          </TouchableOpacity>
        );

      } );

      return ( <View style={ styles.row } key={ `row-${ array }` }>{ numbersMarkup }</View> );

    } );

    return rows;

  }

  buttonPressed( text ) {

    this.setState( {
      resultText: text
    })
  }

  render() {

    const numbers = this.createNumButtons();

    return (
      <View style={ styles.container }>
        <View style={ styles.result }>
          <Text style={ styles.resultText }>{ this.state.resultText }</Text>
        </View>
        <View style={ styles.calculation }>
          <Text style={ styles.calculationText }>121</Text>
        </View>
        <View style={ styles.buttons }>
          <View style={ styles.numbers }>{ numbers }</View>
          <View style={ styles.operations }>
            <TouchableOpacity style={ styles.btn }><Text style={ styles.btnText }>Del</Text></TouchableOpacity>
            <TouchableOpacity style={ styles.btn }><Text style={ styles.btnText }>+</Text></TouchableOpacity>
            <TouchableOpacity style={ styles.btn }><Text style={ styles.btnText }>-</Text></TouchableOpacity>
            <TouchableOpacity style={ styles.btn }><Text style={ styles.btnText }>*</Text></TouchableOpacity>
            <TouchableOpacity style={ styles.btn }><Text style={ styles.btnText }>/</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    color: 'black'
  },
  btnText: {
    fontSize: 30
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  operations: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
});
