import { StyleSheet } from 'react-native';

const colors = {
  brand: '#5311B4',
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.brand,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    zIndex: 1,
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
    backgroundColor: '#fff',
  },
  scrollViewColored: {
    backgroundColor: colors.brand,
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
  backButton: {
  },
  detailHeader: {
    padding: 12,
    backgroundColor: '#5311B4',
  },
  detailSubheader: {
    padding: 12,
    backgroundColor: '#fff',
  },
  detailTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  detailCategory: {
    fontFamily: 'Poppins-SemiBold',
    color: '#63FFAF',
  },
  detailDateTime: {
    fontFamily: 'Poppins-SemiBold',
    color: '#B5B5B5',
  },
  detailLocal: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  detailParticipants: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'right',
  },
  detailParticipantsTitle: {
    fontSize: 10,
    color: '#fff',
  },
  detailParticipantsGoing: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#63FFAF',
  },
  detailParticipantsTotal: {
    color: '#63FFAF',
  },
  detailDescription: {
    height: 320,
    backgroundColor: '#fff',
    padding: 10,
  },
  textInputTitle: {
    height: 44,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  textInputCategory: {
    height: 44,
    fontFamily: 'Poppins-SemiBold',
    color: '#63FFAF',
  },
  inputParticipants: {
    fontSize: 10,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  inputDateTime: {
    fontFamily: 'Poppins-SemiBold',
    color: '#B5B5B5',
    textDecorationLine: 'underline',
  },
  inputLocal: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 10,
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
  button: {
    width: 120,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 4,
    fontFamily: 'Poppins-SemiBold',
    color: colors.brand,
    borderColor: colors.brand,
    borderWidth: 2.5,
    borderRadius: 22,
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: 2,
  },
  button_disabled: {
    width: 120,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 4,
    fontFamily: 'Poppins-SemiBold',
    color: '#B5B5B5',
    borderColor: '#B5B5B5',
    borderWidth: 2.5,
    borderRadius: 22,
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: 2,
  }
});

module.exports = styles;
