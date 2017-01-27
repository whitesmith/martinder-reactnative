import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { NavigationExperimental, BackAndroid } from 'react-native';

import store from './store';
import { pop_screen } from './actions'

import styles from './styles';

import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import CreateEvent from './components/CreateEvent';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class Navigator extends Component {
  constructor(props){
    super(props)
    BackAndroid.addEventListener("hardwareBackPress", this.onBack)
  }
  onBack(){
    store.dispatch( pop_screen() );
    return true;
  }
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this.onBack}
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
      case 'EventDetails':
        return <EventDetails />;
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
