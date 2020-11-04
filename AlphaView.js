import React, { Component } from 'react';

import {
  View,
  Platform,
  Text,
  Button
} from 'react-native';

export default class AlphaView extends Component{
    render(){
      return(
        <View>
          <Text>
            Start
          </Text>
          <Button title="Press me"/>
        </View>
        
      )}
};
const styles = StyleSheet.create({
  AlphaView:
})