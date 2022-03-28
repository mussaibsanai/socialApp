import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "#fff",
        justifyContent : 'center',
        alignItems : 'center',
      },
});


export default styles;