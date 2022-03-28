import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppTextInput = props => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <>
      {props.FieldType == 'password' ? (
        <View style={styles.inputContainer}>
          <TextInput
            value={props.value}
            secureTextEntry={showPassword ? false : true}
            onChangeText={props.onChangeText}
            placeholder={props.PlaceHolderText}
            placeholderTextColor={props.placeholderTextColor}
            style={{width: '85%'}}
          />

          <TouchableOpacity
            onPress={() => {
              setshowPassword(!showPassword);
            }}>
            <Icon
              name={showPassword ? 'eye-slash' : props.icon}
              color={'#aeaeae'}
              size={22}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.inputContainer, {...props.style}]}>
          <TextInput
            value={props.value}
            multiline={props.multiline ? true : false}
            numberOfLines={props.multiline ? props.numofLines : 1}
            onChangeText={props.onChangeText}
            placeholder={props.PlaceHolderText}
            placeholderTextColor={props.placeholderTextColor}
            style={{width: props.icon ? '85%' : "95%"}}
          />

          {props.icon && (
            <View>
              <Icon name={props.icon} color={'#aeaeae'} size={22} />
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#aeaeae',
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 15,
  },
});
