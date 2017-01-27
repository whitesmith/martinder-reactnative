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
            SPORTS
          </Text>
          <Text style={styles.rowTitle}>
            {this.props.title}
          </Text>
          <Text style={styles.rowDateTime}>
            23 Jan 2017 . 18h45
          </Text>
          <Text style={styles.rowLocal}>
            Pavilhão Desportivo
          </Text>
          <Text style={styles.rowParticipants}>
            <Text style={styles.rowParticipantsTitle}>
              GOING&nbsp;&nbsp;
            </Text>
            <Text style={styles.rowParticipantsGoing}>
              5
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
