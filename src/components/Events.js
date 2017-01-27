import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';
import EventCell from './EventCell';
import TabBar from './TabBar';

class Events extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image style={styles.logo}
            source={require('../../res/img/QlutchLogo.png')}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subheaderTitle}>
            Are these the events you're looking for?
          </Text>
          <EventCell />
          <EventCell />
        </ScrollView>
        <TabBar />
      </View>
    );
  }
}

module.exports = Events;
