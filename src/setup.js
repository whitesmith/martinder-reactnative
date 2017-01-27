import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { NavigationExperimental, BackAndroid } from 'react-native';

import store from './store';
import { pop_screen } from './actions'

import styles from './styles';

import Feed from './components/Feed';
import Going from './components/Going';
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
      case 'Feed':
        return <Feed />;
      case 'Going':
        return <Going />;
      case 'CreateEvent':
        return <CreateEvent />;
      default:
        return <Feed />;
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
