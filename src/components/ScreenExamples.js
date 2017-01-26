import React, { Component } from 'react';
import { Button } from 'react-native';

import store from '../store';
import { push_screen, pop_screen } from '../actions'

class Screen1 extends Component {
  change(){
    store.dispatch( push_screen( "Screen2" ) );
  }
  render(){
    return <Button title="Screen1" onPress={this.change}/>;
  }
}

class Screen2 extends Component {
  back(){
    store.dispatch( pop_screen() );
  }
  render(){
    return <Button title="Screen2" onPress={this.back}/>;
  }
}
class Screen3 extends Component {
  render(){
    return <Button title="Screen3" onPress={this.change}/>
  }
}

module.exports = {
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3
}
