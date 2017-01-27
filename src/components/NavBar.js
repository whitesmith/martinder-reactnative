import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from '../styles';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.logo}
          source={require('../../res/img/QlutchLogo.png')}
        />
      </View>
    );
  }
}

module.exports = NavBar;
