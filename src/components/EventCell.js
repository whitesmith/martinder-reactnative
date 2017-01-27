import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

import store from '../store';
import { push_screen, set_events } from '../actions'

class EventCell extends Component {
  onPressCell() {
    store.dispatch( push_screen ( "EventDetails" ));
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onPressCell.bind(this)}>
        <View style={styles.row}>
          <Text style={styles.rowCategory}>
            {this.props.event.category}
          </Text>
          <Text style={styles.rowTitle}>
            {this.props.event.title}
          </Text>
          <Text style={styles.rowDateTime}>
            23 Jan 2017 . 18h45
          </Text>
          <Text style={styles.rowLocal}>
            {this.props.event.location}
          </Text>
          <Text style={styles.rowParticipants}>
            <Text style={styles.rowParticipantsTitle}>
              GOING&nbsp;&nbsp;
            </Text>
            <Text style={styles.rowParticipantsGoing}>
              {this.props.event.users.length}
            </Text>
            <Text style={styles.rowParticipantsTotal}>
              /10
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

module.exports = EventCell;
