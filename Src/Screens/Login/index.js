import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AppButton from '../../Components/AppButton';
import AppTextInput from '../../Components/AppTextInput';
import {set_LoginState, set_user} from '../../Store/action/AuthAction';
import images from '../../Utils/images';
import styles from './style';
const {width, height} = Dimensions.get('window');

function Login(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({
    text: '',
    isValid: true,
  });

  const [password, setPassword] = useState('');

  useEffect(() => {
    if (email.text == '') {
      setEmail({
        text: '',
        isValid: true,
      });
    }
  }, [email.text]);

  const validateEmail = text => {
    console.log('texttt', text);

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setEmail({
        text: text,
        isValid: false,
      });
      return false;
    } else {
      setEmail({
        text: text,
        isValid: true,
      });
      console.log('Email is Correct');
    }
  };

  const login = () => {
    if (email.text == '' || password == '') {
      alert('Please enter details');
      return;
    }
    if (!email.isValid) {
      alert('Please enter email in proper way');
      return;
    }

    dispatch(
      set_user({
        email: email.text,
        password: password,
      }),
    );

    dispatch(set_LoginState(true));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 40}}>
          <Image
            source={images.semiCircle}
            resizeMode={'contain'}
            style={styles.topIcon}
          />
        </View>

        <View style={{paddingHorizontal: 40, marginVertical: 20}}>
          <Text style={styles.headText1}>Hey, Welcome</Text>
          <Text style={styles.headText2}>Login Now</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <AppTextInput
            value={email}
            onChangeText={text => {
              validateEmail(text);
            }}
            PlaceHolderText={'email'}
            placeholderTextColor={'silver'}
            icon={'envelope'}
            style={{
              borderColor: email.isValid ? '#aeaeae' : '#fe2f2f',
            }}
          />

          <AppTextInput
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            PlaceHolderText={'password'}
            placeholderTextColor={'silver'}
            FieldType={'password'}
            icon={'eye'}
          />
        </View>

        <AppButton
          BtnTitle={'Log in'}
          onPress={() => {
            login();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
