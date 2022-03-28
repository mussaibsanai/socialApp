import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch} from 'react-redux';
import AddPost from '../Screens/AddPost';
import Home from '../Screens/Home';
import PostView from '../Screens/PostView';
import {set_LoginState, set_user} from '../Store/action/AuthAction';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();




export default function AppNav() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostView"
        component={PostView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
