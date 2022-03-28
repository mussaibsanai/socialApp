import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headText: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#a71f42',
    fontFamily: 'Montserrat',
  },
});

export default styles;
