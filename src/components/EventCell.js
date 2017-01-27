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

class EventCell extends Component {
  render() {
    return (
      <TouchableOpacity>
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
