import React, { Component } from 'react';
import EventItem from './EventItem'
import { connect } from 'react-redux';
import { View, Button } from 'react-native';

import store from '../store';
import { set_events } from '../actions'

import API from '../helpers/Api'

class EventList extends Component {

  render() {
    return (
      <View>
        {
          this.props.events.map((each, index) => {
            return <EventItem
              key={each.id}
              index={index}
              title={each.title}
              required_number={each.required_number}
            />
          })
        }
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
      store.dispatch( set_events( response ) );
    })
  }
  render(){
    return <EventListConnector />
  }
}

export default EventListContainer;
