import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../Components/Header';

const PostView = ({navigation, ...props}) => {
  const {post} = props.route.params;
  console.log('postt', post);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        HeadTitle={'Post'}
        leftIcon="chevron-left"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView contentContainerStyle={{padding : 20,}} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.title}</Text>
        </View>
        <View>
          <Text style={styles.body}>{post.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostView;
