import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5311B4',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#63FFAF',
    margin: 15,
    marginTop: 30,
  },
  subheaderTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#5311B4',
    margin: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    borderColor: '#B5B5B5',
    borderWidth: 0.5,
  },
  tabItem: {
    flex: 1,
  },
  tabTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#5311B4',
    textAlign: 'center',
  },
  tabItemImage: {
    width: 22,
    height: 22,
    margin: 8,
    overflow: 'visible',
    alignSelf: 'center',
  },
  scrollView: {
    backgroundColor: '#fff'
  },
  logo: {
    width: 100,
    height: 25,
    alignSelf: 'center',
    margin: 15,
    marginTop: 30,
  },
  row: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 0.2
  },
  rowTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  rowCategory: {
    fontFamily: 'Poppins-SemiBold',
    color: '#5311B4',
  },
  rowDateTime: {
    fontFamily: 'Poppins-SemiBold',
    color: '#B5B5B5',
  },
  rowLocal: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  rowParticipants: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'right',
  },
  rowParticipantsTitle: {
    fontSize: 10,
    color: '#B5B5B5',
  },
  rowParticipantsGoing: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#5311B4',
  },
  rowParticipantsTotal: {
    color: '#5311B4',
  },
});

module.exports = styles;
