import React, { Component } from 'react';
import {
  AppRegistry,
  NavigationExperimental,
  Text,
  ScrollView,
  View,
  Button,
  Alert,
} from 'react-native';

import styles from './styles';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const onPressEvents = () => {
  Alert.alert('Events button pressed!');
};

const onPressCreateEvent = () => {
  Alert.alert('Create event button pressed!');
};

function setup() {
  class Root extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        navigationState: {
          index: 0,
          routes: [{key: 'main'}], //stack
        },
      };
      this._onNavigationChange = this._onNavigationChange.bind(this);
    }

    _onNavigationChange(type, route) {
      // Extract the navigationState from the current state:
      let {navigationState} = this.state;

      switch (type) {
        case 'push':
          // Use the push reducer provided by NavigationStateUtils
          navigationState = NavigationStateUtils.push(navigationState, {key: route});
          break;
        case 'pop':
          // Pop the current route using the pop reducer.
          navigationState = NavigationStateUtils.pop(navigationState);
          break;
      }

      // NavigationStateUtils gives you back the same `navigationState` if nothing
      // has changed. We will only update state if it has changed.
      if (this.state.navigationState !== navigationState) {
        // Always use setState() when setting a new state!
        this.setState({navigationState});
        // If you are new to ES6, the above is equivalent to:
        // this.setState({navigationState: navigationState});
      }
    }

    render() {
      return (
        <Navigator
          navigationState={this.state.navigationState}
          onNavigationChange={this._onNavigationChange}
          onExit={this._exit}
        />
      );
    }
  }

  return Root;
}

class Navigator extends Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props, context) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push', '?');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

    this._renderScene = this._renderScene.bind(this);
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    );
  }

  _renderScene(sceneProps) {
    switch (sceneProps.scene.route.key) {
      case 'main':
        return (
          <Main
            route={sceneProps.scene.route}
            onPushRoute={this._onPushRoute}
            onPopRoute={this._onPopRoute}
            onExit={this.props.onExit}
          />
        )
      default:
        return (
          <Events
            route={sceneProps.scene.route}
            onPushRoute={this._onPushRoute}
            onPopRoute={this._onPopRoute}
            onExit={this.props.onExit}
          />
        )
    }
  }
}

class Main extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          Route: {this.props.route.key}
        </Text>
        <Button
          title="Tap me to load the next scene"
          onPress={this.props.onPushRoute}
        />
      </ScrollView>
    );
  }
}

class Events extends Component {
  render() {
    return <Button title="Back" onPress={this.props.onPopRoute}/>
  }
}

module.exports = setup;
