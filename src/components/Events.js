import React, { Component } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

class Events extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          Route: {this.props.route.key}
        </Text>
      </ScrollView>
    );
  }
}

module.exports = Events;
