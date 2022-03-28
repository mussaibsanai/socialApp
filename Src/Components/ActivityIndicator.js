import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

function ActivityIndicators({visible = false}) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#289A8D" />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    opacity: 0.5,
    width: '100%',
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
  },
});

export default ActivityIndicators;
