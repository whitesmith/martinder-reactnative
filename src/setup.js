import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { NavigationExperimental } from 'react-native';

import store from './store';
import styles from './styles';

import { Screen1, Screen2, Screen3 } from './components/ScreenExamples';
import EventList from './components/EventList';

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
      case 'Screen1':
        return <Screen1 />;
      case 'Screen2':
        return <Screen2 />;
      default:
        return <Screen3 />;
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
