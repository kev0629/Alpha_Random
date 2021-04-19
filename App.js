/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import AlphaView from './AlphaView';
import ConfigView from './ConfigView';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.onMinChange = this.onMinChange.bind(this);
    this.onMajChange = this.onMajChange.bind(this);
    this.onScrChange = this.onScrChange.bind(this);
    this.onCurChange = this.onCurChange.bind(this);
  }
  state = {
    isMinOn: true,
    isMajOn: false,
    isScrOn: true,
    isCurOn: false,
  };
  onMinChange() {
    console.log(this.state.isMinOn);
    this.setState({isMinOn: !this.state.isMinOn}, function () {
      console.log(this.state.isMinOn);
      console.log(this.state);
      if (!this.state.isMinOn && !this.state.isMajOn) {
        this.setState({isMinOn: true});
      }
    });
  }
  onMajChange() {
    this.setState({isMajOn: !this.state.isMajOn}, function () {
      console.log(this.state.isMinOn);
      console.log(this.state);
      if (!this.state.isMinOn && !this.state.isMajOn) {
        this.setState({isMinOn: true});
      }
    });
  }
  onScrChange() {
    this.setState({isScrOn: !this.state.isScrOn}, function () {
      console.log(this.state.isMinOn);
      console.log(this.state);
      if (!this.state.isScrOn && !this.state.isCurOn) {
        this.setState({isScrOn: true});
      }
    });
  }
  onCurChange() {
    this.setState({isCurOn: !this.state.isCurOn}, function () {
      console.log(this.state.isMinOn);
      console.log(this.state);
      if (!this.state.isScrOn && !this.state.isCurOn) {
        this.setState({isScrOn: true});
      }
    });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home">
              {(props) => (
                <AlphaView
                  {...props}
                  isMinOn={this.state.isMinOn}
                  isMajOn={this.state.isMajOn}
                  isScrOn={this.state.isScrOn}
                  isCurOn={this.state.isCurOn}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Config">
              {(props) => (
                <ConfigView
                  {...props}
                  isMinOn={this.state.isMinOn}
                  isMajOn={this.state.isMajOn}
                  isScrOn={this.state.isScrOn}
                  isCurOn={this.state.isCurOn}
                  onMinChange={this.onMinChange}
                  onMajChange={this.onMajChange}
                  onScrChange={this.onScrChange}
                  onCurChange={this.onCurChange}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        {/* {console.log(this.state)} */}
      </>
    );
  }
}

export default App;
