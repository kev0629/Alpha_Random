import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {View, StyleSheet, Text, SafeAreaView,Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

function randomLetter(isScrMinOn, isScrMajOn, isCurMinOn, isCurMajOn) {
  var result = '';
  var majString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var minString = 'abcdefghijklmnopqrstuvwxyz';
  if (
    (isScrMajOn == true || isCurMajOn == true) &&
    (isScrMinOn == false || isCurMinOn == false)
  ) {
    var characters = majString;
  } else if (
    (isScrMajOn == false || isCurMajOn == false) &&
    (isScrMinOn == true || isCurMinOn == true)
  ) {
    var characters = minString;
  } else if (
    (isScrMajOn == true || isCurMajOn == true) &&
    (isScrMinOn == true || isCurMinOn == true)
  ) {
    var characters = minString + majString;
  }
  var charactersLength = characters.length;
  for (var i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomFont(isScrMinOn, isScrMajOn, isCurMinOn, isCurMajOn) {
  if (
    (isScrMajOn == true || isScrMinOn == true) &&
    (isCurMajOn == true || isCurMinOn == true)
  ) {
    var fonts;
    Platform.OS === 'ios'
      ? (fonts = [null, 'Cursive_standard'])
      : (fonts = [null, 'Cursive_standard']);
  } else if (
    (isScrMajOn == false || isScrMinOn == false) &&
    (isCurMajOn == true || isCurMinOn == true)
  ) {
    var fonts;
    Platform.OS === 'ios'
      ? (fonts = ['Cursive_standard'])
      : (fonts = ['Cursive_standard']);
  } else if (
    (isScrMajOn == true || isScrMinOn == true) &&
    (isCurMajOn == false || isCurMinOn == false)
  ) {
    var fonts = [null];
  }
  let result = fonts[Math.floor(Math.random() * fonts.length)];
  return result;
}

export default class AlphaView extends Component {
  state = {
    letter: 'Start',
    ...Platform.select({
      ios: {
        font: 'Cursive standard',
      },
      android: {
        font: 'Cursive_standard',
      },
    }),
  };
  reload() {
    this.setState({
      letter: randomLetter(
        this.props.isScrMinOn,
        this.props.isScrMajOn,
        this.props.isCurMinOn,
        this.props.isCurMajOn,
      ),
      font: randomFont(
        this.props.isScrMinOn,
        this.props.isScrMajOn,
        this.props.isCurMinOn,
        this.props.isCurMajOn,
      ),
    });
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.black}}>
        <View style={styles.TotalView}>
          <View style={styles.AlphaView}>
            <Text style={[styles.AlphaText, {fontFamily: this.state.font}]}>
              {this.state.letter}
            </Text>
            <Button
              icon={iconStyle.refresh}
              type="clear"
              style={styles.RefreshButton}
              onPress={() => {
                this.reload();
              }}
            />
          </View>
          <View>
            <Button
              type="clear"
              icon={<ConfigIcon />}
              buttonStyle={{justifyContent: 'flex-end'}}
              onPress={() => this.props.navigation.navigate('Config')}
            />
          </View>
        </View>
        {console.log(this.props)}
      </SafeAreaView>
    );
  }
}

function ConfigIcon() {
  return <Icon name="cog" size={50} color="white" />;
}

const iconStyle = {
  refresh: {
    name: 'refresh',
    size: 50,
    color: 'white',
  },
  config: {
    name: 'cog',
    size: 50,
    color: 'white',
  },
};

constletterStyle = function () {
  return {
    color: Colors.white,
    fontSize: 100,
    textAlign: 'center',
    padding: 50,
    //fontFamily:'Cursive standard'
  };
};

const styles = StyleSheet.create({
  AlphaText: {
    color: Colors.white,
    fontSize: 150,
    textAlign: 'center',
    padding: 50,
    //fontFamily:'Cursive standard'
  },
  RefreshButton: {
    //backgroundColor: 'red',
  },
  configButton: {
    textAlign: 'right',
  },
  AlphaView: {
    //backgroundColor:'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TotalView: {
    // backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
