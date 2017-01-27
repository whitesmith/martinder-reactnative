import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Button
} from 'react-native';
import styles from '../styles';

class EventDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          Route:
        </Text>
        <Button
          onPress={onPressSave}
          title="Save"
        />
      </ScrollView>
    );
  }
}

module.exports = EventDetails;
