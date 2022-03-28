import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const PostItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.postCard}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View>
      <Text numberOfLines={2} lineBreakMode="tail" style={styles.body}>{item.body}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  postCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 20,
    marginVertical: height * 0.02,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#a71f42',
    fontFamily: 'Montserrat-Bold',
  },
  body: {
    fontSize: width * 0.03,
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  titleContainer : {
    marginBottom: height * 0.01,
  },
  bodyContainer : {
    marginVertical: height * 0.01,
    width : "80%"
  }
});
