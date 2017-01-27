import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';

import store from '../store';
import { set_events } from '../actions'
import API from '../helpers/Api'


class Feed extends Component {
  render() {
    return (
      <EventList subHeader="Are these the events you're looking for?" events={this.props.events} />
    );
  }
}

const FeedConnector = connect((state, ownProps) => {
  return {
    events: state.events
  }
})(Feed);

class FeedContainer extends Component {
  constructor(props){
    super(props)
    API.events().then(function(response){
      //if(response !== undefined && response.data !== undefined)
        store.dispatch( set_events( response.data ) );
    })
  }
  render(){
    return <FeedConnector />
  }
}

export default FeedContainer;
