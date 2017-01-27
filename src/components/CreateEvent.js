import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  NativeModules,
  DatePickerAndroid,
} from 'react-native';
import colors from '../styles';
import styles from '../styles';
import NavBar from './NavBar';
import BorderedButton from './BorderedButton';
var DatePickerDialog = NativeModules.DatePickerDialog;

const onPressDateTime = () => {
  if (Platform.OS === 'ios') {
    DatePickerDialog.showPicker('Date and Time');
  }
  else {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
};

class CreateEvent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar/>
        <ScrollView style={styles.scrollViewColored}>
          <View style={styles.detailHeader}>
            <TextInput style={styles.textInputCategory}
              placeholder='TYPE OF EVENT'>
            </TextInput>
            <TextInput style={styles.textInputTitle}
              placeholder='Event name'>
            </TextInput>
            <TouchableOpacity>
              <Text style={styles.detailParticipants}>
                  <Text style={styles.inputParticipants}>
                    PEOPLE NEEDED
                  </Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailSubheader}>
            <TouchableOpacity onPress={onPressDateTime}>
              <Text style={styles.inputDateTime}>
                Set Date
              </Text>
              <Text style={styles.inputDateTime}>
                Set Hour
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.inputLocal}>
                Select Localization
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.detailDescription}
             placeholder='Description'>
          </TextInput>
        </ScrollView>
        <View style={styles.footer}>
          <BorderedButton title="CREATE"/>
        </View>
      </View>
    );
  }
}

module.exports = CreateEvent;
