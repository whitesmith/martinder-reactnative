import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class EventItem extends Component {
  render(){
    return (
      <View>
        <Text>
          Titulo: {this.props.title}
        </Text>
        <Text>
          Required Players: {this.props.required_number}
        </Text>
      </View>
    );
  }
}
