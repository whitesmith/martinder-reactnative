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
import { jump_to, push_screen } from '../actions'

const feed_img = require('../../res/img/Feed.png')
const events_img = require('../../res/img/Events.png')
const create_img = require('../../res/img/Create.png')

class TabButton extends Component {
  onPress(){
    if(this.props.link !== undefined){
      if(this.props.push == true)
        store.dispatch( push_screen ( this.props.link ));
      else
        store.dispatch( jump_to ( this.props.link ));
    }
  }
  render() {
    return (
      <TouchableOpacity style={styles.tabItem} onPress={this.onPress.bind(this)}>
        <View>
          <Image style={styles.tabItemImage} source={this.props.icon} />
          <Text style={styles.tabTitle}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class TabBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TabButton icon={feed_img} text="Feed" link="Feed"/>
        <TabButton icon={events_img} text="Going" link="Going"/>
        <TabButton icon={create_img} text="Create" link="CreateEvent" push={true}/>
      </View>
    );
  }
}

module.exports = TabBar;
