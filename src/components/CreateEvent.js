import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import NavBar from './NavBar';

class CreateEvent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar/>
        <ScrollView style={styles.scrollView}>
          <View style={styles.detailHeader}>
            <TextInput style={styles.textInputCategory}
              placeholder='TYPE OF EVENT'>
            </TextInput>
            <TextInput style={styles.textInputTitle}
              placeholder='Event name'>
            </TextInput>
            <Text style={styles.detailParticipants}>
              <Text style={styles.inputParticipants}>
                PEOPLE NEEDED
              </Text>
            </Text>
          </View>
          <View style={styles.detailSubheader}>
            <Text style={styles.detailDateTime}>
              Set Date
            </Text>
            <Text style={styles.detailDateTime}>
              Set Hour
            </Text>
            <Text style={styles.detailLocal}>
              Select Localization
            </Text>
          </View>
          <Text>
             Description
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <BorderedButton title="CREATE"/>
        </View>
      </View>
    );
  }
}

module.exports = CreateEvent;
