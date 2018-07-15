import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Root } from "native-base";
import Login from './src/components/login/login.js';
import Register from './src/components/register/register';
import Home from './src/components/home/home';
import Dashboard from './src/components/dashboard/dashboard';
import ViewNote from './src/components/viewnote/index.js';

export default class App extends React.Component {

  render() {
    return (
      <Root>
          <Routes />
      </Root>          
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
  Dashboard: { 
    screen: Dashboard,
    navigationOptions: {
      title: 'MY NOTES',
      headerLeft: null
    }
  },
  ViewNote: { screen: ViewNote },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
