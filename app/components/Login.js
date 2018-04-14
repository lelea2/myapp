import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async() => {
    const value = await AsyncStorage.getItem('user');
    if (!!value) {
      this.props.navigation.navigate('Profile');
    }
  }

  handleNameChange = (username) => {
    this.setState({
      username
    });
  }

  handlePwChange = (password) => {
    this.setState({
      password
    });
  }

  login = () => {
    fetch('http://example.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('Profile');
        } else {
          alert(res.message);
        }
      })
      .done();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- LOGIN -</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Username'
            onChangeText={this.handleNameChange}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            onChangeText={this.handlePwChange}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={this.login}
          >
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 6,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 6,
    alignItems: 'center'
  }
});