/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react';
import {
	AppRegistry,
} from 'react-native';
import {
	StackNavigator
} from 'react-navigation';

import LaunchPage from './app/routes/Launch/index.js';
import HomePage from './app/routes/Home/index.js';
import LoginPage from './app/routes/Login/index.js';
import ChatPage from './app/routes/Chat/index.js';
import ConversationListPage from './app/routes/ConversationList/index.js';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

const ReactJChat = StackNavigator({
	Launch: { screen: LaunchPage },
	Home: { screen: HomePage },
  Login: {screen: LoginPage},
  Chat: {
    type: 'Reset',
    screen: ChatPage,
    path: 'people/:conversation'
  },
  ConversationList: {screen: ConversationListPage}
},{
    // mode:'modal',
    headerMode: 'screen',
    transitionConfig:()=>({
      screenInterpolator:CardStackStyleInterpolator.forInitial,
    })
});

AppRegistry.registerComponent('ReactJChat', () => ReactJChat);
