import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch
  } from 'react-native';

  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

export default class ConfigView extends Component {
    state = {
        isScrMinOn: false,
        isScrMajOn: false,
        isCurMinOn: false,
        isCurMajOn: false
      };
    render() {
        return(
            <View style={styles.ConfigView}>
              <View style={styles.LabelsView}>
                <Text>Script Min.</Text>
              </View>
              <View style={styles.SwitchsView}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isScrMinOn => this.setState({isScrMinOn})}
                    value={this.state.isScrMinOn}
                />
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Labels: {
      color: Colors.white
    },
    SwitchsView: {
      flexDirection: 'row',
      backgroundColor:'gray',
      textAlign:'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    LabelsView: {
      flexDirection: 'row',
      backgroundColor:'blue',
      textAlign:'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ConfigView:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
    }
})