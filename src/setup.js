import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import styles from './styles';

const onPressEvents = () => {
  Alert.alert('Events button pressed!');
};

const onPressCreateEvent = () => {
  Alert.alert('Events button pressed!');
};

function setup() {
  class Root extends Component {
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

  return Root;
}

module.exports = setup;
