import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "#fff",
      },
      descriptionInput : {
        alignSelf: 'center',
        width: '90%',
        marginVertical: 10,
        textAlignVertical : 'top',
        borderColor: '#aeaeae',
        borderRadius: 10,
        borderWidth: 1.5,
        paddingHorizontal : width*0.02,
        height : height*0.2,
      }
});



export default styles;