import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import 'react-native-gesture-handler';
import styles from './style';

function Splash(props) {

    return(
       <SafeAreaView style={styles.container}>
            <ActivityIndicator color={"#a71f42"} size={'large'} />
       </SafeAreaView> 
    );
}



export default Splash;