import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNav from './AppNav';
import AuthNav from './AuthNav';
import {useSelector} from 'react-redux';
import 'react-native-gesture-handler';

export default function MainNav() {
  const loginState = useSelector(state => state.AuthReducer.logInState);
  return (
    <NavigationContainer>
      {loginState ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
}
