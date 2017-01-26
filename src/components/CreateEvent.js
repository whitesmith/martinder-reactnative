import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Button
} from 'react-native';

const onPressSave = () => {
  Alert.alert('Save button pressed!');
};

class CreateEvent extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          Route: {this.props.route.key}
        </Text>
        <Button
          onPress={onPressSave}
          title="Save"
        />
      </ScrollView>
    );
  }
}

module.exports = CreateEvent;
