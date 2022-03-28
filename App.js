import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNav from './Src/Navigation/MainNav';
import Splash from './Src/Screens/Splash';
import { presistor, store } from './Src/Store/store';
import 'react-native-gesture-handler';

export default function App() {
  return (
   <Provider store={store}>
     <PersistGate loading={<Splash />} persistor={presistor}>
        <MainNav />
     </PersistGate>
   </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
