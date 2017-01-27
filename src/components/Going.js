import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';

import store from '../store';
import { set_events } from '../actions'
import API from '../helpers/Api'


class Going extends Component {
  render() {
    return (
      <EventList subHeader="Are these the events you're looking for?" events={this.props.events} />
    );
  }
}

const GoingConnector = connect((state, ownProps) => {
  return {
    events: state.events.slice(0, 3)
  }
})(Going);

class GoingContainer extends Component {
  constructor(props){
    super(props)
    API.events().then(function(response){
      store.dispatch( set_events( response.data ) );
    })
  }
  render(){
    return <GoingConnector />
  }
}

export default GoingContainer;
