import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topIcon: {
      width: 30,
      height: 40,
  },
  
  headText1: {
    fontSize: width * 0.04,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  headText2: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#a71f42',
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
