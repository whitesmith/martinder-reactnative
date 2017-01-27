import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

class BorderedButtom extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.button}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

module.exports = BorderedButtom;
