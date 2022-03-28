import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../../Components/AppButton';
import AppTextInput from '../../Components/AppTextInput';
import Header from '../../Components/Header';
import { set_PostData } from '../../Store/action/MainAction';
import styles from './style';


function AddPost({props, navigation}) {
    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state.MainReducer.posts);
    const [posts, setPosts] = useState(allPosts);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // useEffect(() => {
    //     dispatch(set_PostData([]));
    // }, []);
   
    function addNewPost(){
      if(title == "" || body == ""){
        alert("Please fill all the fields");
        return;
      }
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body,
            userId: 1,
          })
          .then(function (response) {
            console.log(response);
            let data = response.data;
            let arr = posts;
            arr.push(data)
            dispatch(set_PostData(arr));
            navigation.replace("Home");
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      console.log("Posts ==>", posts, allPosts)
    return(
       <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView style={styles.container}>
        <Header
        HeadTitle={"New Post"} 
         leftIcon="chevron-left"
         onLeftIconPress={() => {
            navigation.goBack();
         }}
        
        />
        
        <AppTextInput
          value={title}
          onChangeText={text => {
            setTitle(text);
          }}
          PlaceHolderText={'title'}
          placeholderTextColor={'silver'}
          style={{
            borderColor: '#aeaeae',
          }}
        />

       

        <TextInput 
        value={body}
          onChangeText={text => {
            setBody(text);
          }}
          multiline={true}
          numofLines={4}
          placeholder={'blog details'}
          placeholderTextColor={'silver'}
          style={styles.descriptionInput}
        />
      <AppButton 
        BtnTitle={"Add Post"}
        onPress={() => {
            addNewPost();
        }}
        />
        </KeyboardAvoidingView>
       
       </SafeAreaView> 
    );
}



export default AddPost;