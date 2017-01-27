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
import { push_screen } from '../actions'

class TabBar extends Component {
  create(){
    store.dispatch( push_screen( "CreateEvent" ) );
  }
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <View>
            <Image style={styles.tabItemImage}
              source={require('../../res/img/Feed.png')}
            />
            <Text style={styles.tabTitle}>
            Feed
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View>
            <Image style={styles.tabItemImage}
              source={require('../../res/img/Events.png')}
            />
            <Text style={styles.tabTitle}>
            Going
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={this.create}>
          <View>
            <Image style={styles.tabItemImage}
              source={require('../../res/img/Create.png')}
            />
            <Text style={styles.tabTitle}>
            Create
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = TabBar;
