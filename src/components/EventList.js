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

import TabBar from './TabBar';
import EventCell from './EventCell';
import styles from '../styles'

class EventList extends Component {
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
            {this.props.subHeader}
          </Text>
          {
            this.props.events.map((each, index) => {
              return <EventCell
                key={each.id}
                index={index}
                event={each}
              />
            })
          }
        </ScrollView>
        <TabBar />
      </View>
    );
  }
}

export default EventList;
