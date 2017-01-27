import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import NavBar from './NavBar';

class EventDetails extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar/>
        <ScrollView style={styles.scrollView}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailCategory}>
              SPORTS
            </Text>
            <Text style={styles.detailTitle}>
              Futebol 5x5
            </Text>
            <Text style={styles.detailParticipants}>
              <Text style={styles.detailParticipantsTitle}>
                GOING&nbsp;&nbsp;
              </Text>
              <Text style={styles.detailParticipantsGoing}>
                5
              </Text>
              <Text style={styles.detailParticipantsTotal}>
                /10
              </Text>
            </Text>
          </View>
          <View style={styles.detailSubheader}>
            <Text style={styles.detailDateTime}>
              23 Jan 2017 . 16h15
            </Text>
            <Text style={styles.detailLocal}>
              Pavilhão Whitesmith
            </Text>
          </View>
          <Text>
             - Trazer equipamento próprio{'\n'}
             - 2,5e por pessoa;{'\n'}
          </Text>
        </ScrollView>
        <View>
          <Text>
            Subscribe
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = EventDetails;
