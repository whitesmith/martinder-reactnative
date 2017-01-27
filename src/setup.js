import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { NavigationExperimental } from 'react-native';

import store from './store';
import styles from './styles';

import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class Navigator extends Component {
  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
      />
    );
  }
  _renderScene(sceneProps) {
    switch (sceneProps.scene.route.key) {
      case 'EventList':
        return <EventList />;
      case 'CreateEvent':
        return <CreateEvent />;
      case 'Screen2':
        return <EventList />;
      default:
        return <EventList />;
    }
  }
}

const NavigatorConnect = connect((state, ownProps) => {
  return {
    navigationState: state.navigationState
  }
})(Navigator);

function setup(){
  class Root extends Component {
    render(){
      return (
        <Provider store={store}>
          <NavigatorConnect />
        </Provider>
      );
    }
  }
  return Root
}

module.exports = setup;
