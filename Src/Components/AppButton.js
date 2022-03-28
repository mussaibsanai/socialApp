import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const AppButton = props => {
  return (
    <View style={{width: '80%', alignSelf: 'center'}}>
      <TouchableOpacity onPress={props.onPress} style={styles.btn}>
        <Text style={styles.btnTitle}>{props.BtnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#a71f42',
  },
  btnTitle: {
    fontSize: width * 0.04,
    color: '#fff',
    fontWeight : '600',
    fontFamily: 'Montserrat',
  },
});
