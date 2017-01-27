import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

class BorderedButtom extends Component {
  onPress(){
    if(!this.props.disabled)
      this.props.onPress()
  }
  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={this.props.disabled ? styles.button_disabled : styles.button}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
    </View>
    );
  }
}

module.exports = BorderedButtom;
