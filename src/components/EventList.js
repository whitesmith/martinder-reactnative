import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import NavBar from './NavBar';
import TabBar from './TabBar';

import store from '../store';
import { set_events } from '../actions'

import API from '../helpers/Api'

class EventList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subheaderTitle}>
            Are these the events you're looking for?
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

const EventListConnector = connect((state, ownProps) => {
  return {
    events: state.events
  }
})(EventList);

class EventListContainer extends Component {
  constructor(props){
    super(props)
    API.events().then(function(response){
      console.log("\n\n\n")
      console.log(response)
      store.dispatch( set_events( response.data ) );
    })
  }
  render(){
    return <EventListConnector />
  }
}

export default EventListContainer;
