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
    this.onScrMinChange = this.onScrMinChange.bind(this);
    this.onScrMajChange = this.onScrMajChange.bind(this);
    this.onCurMinChange = this.onCurMinChange.bind(this);
    this.onCurMajChange = this.onCurMajChange.bind(this);
  }
  state = {
    isScrMinOn: true,
    isScrMajOn: false,
    isCurMinOn: false,
    isCurMajOn: false,
  };
  onScrMinChange() {
    console.log(this.state.isScrMinOn);
    this.setState({isScrMinOn: !this.state.isScrMinOn}, function () {
      console.log(this.state.isScrMinOn);
      console.log(this.state);
      if (
        !this.state.isScrMinOn &&
        !this.state.isScrMajOn &&
        !this.state.isCurMinOn &&
        !this.state.isCurMajOn
      ) {
        this.setState({isScrMinOn: true});
      }
    });
  }
  onScrMajChange() {
    this.setState({isScrMajOn: !this.state.isScrMajOn}, function () {
      console.log(this.state.isScrMinOn);
      console.log(this.state);
      if (
        !this.state.isScrMinOn &&
        !this.state.isScrMajOn &&
        !this.state.isCurMinOn &&
        !this.state.isCurMajOn
      ) {
        this.setState({isScrMinOn: true});
      }
    });
  }
  onCurMinChange() {
    this.setState({isCurMinOn: !this.state.isCurMinOn}, function () {
      console.log(this.state.isScrMinOn);
      console.log(this.state);
      if (
        !this.state.isScrMinOn &&
        !this.state.isScrMajOn &&
        !this.state.isCurMinOn &&
        !this.state.isCurMajOn
      ) {
        this.setState({isScrMinOn: true});
      }
    });
  }
  onCurMajChange() {
    this.setState({isCurMajOn: !this.state.isCurMajOn}, function () {
      console.log(this.state.isScrMinOn);
      console.log(this.state);
      if (
        !this.state.isScrMinOn &&
        !this.state.isScrMajOn &&
        !this.state.isCurMinOn &&
        !this.state.isCurMajOn
      ) {
        this.setState({isScrMinOn: true});
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
                  isScrMinOn={this.state.isScrMinOn}
                  isScrMajOn={this.state.isScrMajOn}
                  isCurMinOn={this.state.isCurMinOn}
                  isCurMajOn={this.state.isCurMajOn}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Config">
              {(props) => (
                <ConfigView
                  {...props}
                  isScrMinOn={this.state.isScrMinOn}
                  isScrMajOn={this.state.isScrMajOn}
                  isCurMinOn={this.state.isCurMinOn}
                  isCurMajOn={this.state.isCurMajOn}
                  onScrMinChange={this.onScrMinChange}
                  onScrMajChange={this.onScrMajChange}
                  onCurMinChange={this.onCurMinChange}
                  onCurMajChange={this.onCurMajChange}
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
