import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';

function Splash(props) {

    return(
       <View style={styles.container}>
            <Text>Splash</Text>
       </View> 
    );
}

const styles = StyleSheet.create({
    container : {

    }
});


export default Splash;