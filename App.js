import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';

const Application = StackNavigator({
    Home: {screen: Login },
  }, {
    navigationOptions: {
      header: false
    }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Application />
    );
  }
}
