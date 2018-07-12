import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/components/login/login.js';
import Register from './src/components/register/register';
import Home from './src/components/home/home';
import Dashboard from '../dashboard/dashboard';

export default class App extends React.Component {

  render() {
    return (
          <Routes />
    ); 
  }
}

const Routes = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Login: { screen: Login },
  Register: { screen: Register },
  Dashboard: { screen: Dashboard }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
