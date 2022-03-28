import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {useDispatch, useSelector,} from 'react-redux';
import ActivityIndicators from '../../Components/ActivityIndicator';
import Header from '../../Components/Header';
import PostItem from '../../Components/PostItem';
import {set_LoginState, set_user} from '../../Store/action/AuthAction';
const {width, height} = Dimensions.get('window');
import styles from './style';

function Home({navigation}) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.MainReducer.posts);
  const [postData, setPostData] = useState(posts);
  

  const logOut = () => {
    dispatch(set_user({}));
    dispatch(set_LoginState(false));
  };

  

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
     
      if (posts.length != postData.length) {
        setPostData(posts);
      }
     
    });

    return unsubscribe;
  

   
  }, [navigation]);

  return (
     
        <SafeAreaView style={styles.container}>
          <Header
            HeadTitle={'Home'}
            leftIcon="sign-out-alt"
            onLeftIconPress={() => {
              logOut();
            }}
            rightIcon="edit"
            onRightIconPress={() => {
              navigation.navigate('AddPost');
            }}
          />

          <View style={{paddingHorizontal: 40, marginVertical: 20}}>
            <Text
              style={styles.headText}>
              Blogs
            </Text>
          </View>
          <FlatList
            data={postData}
            extraData={postData}
            keyExtractor={index => index}
            renderItem={({item, index}) => {
              return (
                <PostItem
                  item={item}
                  onPress={() => {
                    navigation.navigate('PostView', {post: item});
                  }}
                />
              );
            }}
          />
        </SafeAreaView>
     
  );
}

export default Home;
