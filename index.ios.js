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
  Button,
  Alert
} from 'react-native';

const onPressEvents = () => {
  Alert.alert('Events button pressed!');
};

const onPressCreateEvent = () => {
  Alert.alert('Events button pressed!');
};

export default class martinder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Martinder!
        </Text>
        <Button
          onPress={onPressEvents}
          title="Create event"
        />
        <Button
          onPress={onPressCreateEvent}
          title="Events"
        />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('martinder', () => martinder);
