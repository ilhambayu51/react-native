/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry} from 'react-native';
import Judul from './Components/Judul';
/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +s
    'Shake or press menu button for dev menu',
	<Text style={styles.instructions}>{instructions}</Text>
}); */

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
      <Text style={styles.welcome}>Nama: Ilham Bayu W</Text>
		  <Text style={styles.welcome}>Kelas:XI RPL 4</Text>
	    <Text style={styles.welcome}>No:16</Text>
      <Image
          source={require('./2.png')}
          style= {{width:300, height:250}}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 /* instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
