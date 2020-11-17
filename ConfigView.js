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
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Labels}>Script Min.</Text>
                <Switch
                    style={styles.switchs}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isScrMinOn => this.setState({isScrMinOn})}
                    value={this.state.isScrMinOn}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Labels}>Script Maj.</Text>
                <Switch
                    style={styles.switchs}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isScrMajOn => this.setState({isScrMajOn})}
                    value={this.state.isScrMajOn}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Labels}>Cursive Min.</Text>
                <Switch
                    style={styles.switchs}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isCurMinOn => this.setState({isCurMinOn})}
                    value={this.state.isCurMinOn}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Labels}>Cursive Maj.</Text>
                <Switch
                    style={styles.switchs}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isCurMajOn => this.setState({isCurMajOn})}
                    value={this.state.isCurMajOn}
                />
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Labels: {
      color: Colors.white,
      textAlign:'center',
      alignItems: 'stretch'
      //fontFamily:'Cursive standard'
    },
    switchs: {
      alignItems: 'stretch',
      justifyContent: 'center'
      //fontFamily:'Cursive standard'
    },
    ConfigView:{
      flex:1
    }
})