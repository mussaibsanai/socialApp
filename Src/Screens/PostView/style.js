import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "#fff",
      },
      title: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#a71f42',
      },
      body: {
        fontSize: width * 0.03,
        fontWeight: '400',
      },
      titleContainer : {
        marginVertical: height * 0.01,
      },
      bodyContainer : {
        marginVertical: height * 0.01,
        width : "80%"
      }
});


export default styles;