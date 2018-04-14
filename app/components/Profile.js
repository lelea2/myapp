import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to profile page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3'
  },
  text: {
    color: '#fff'
  }
});