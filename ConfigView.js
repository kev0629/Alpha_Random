import React, {Component} from 'react';
import {Text, View, StyleSheet, Switch, SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-elements';

export default class ChoiceView extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.black}}>
        <View style={styles.BackView}>
          <Button
            icon={iconStyle.back}
            type="clear"
            style={styles.RefreshButton}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.ConfigView}>
          <View style={styles.ChoiceView}>
            <>
              <View style={styles.LabelsView}>
                <Text style={styles.Labels}>Script min.</Text>
              </View>
              <View style={styles.SwitchsView}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.props.onScrMinChange}
                  value={this.props.isScrMinOn}
                />
              </View>
            </>
          </View>
          <View style={styles.ChoiceView}>
            <>
              <View style={styles.LabelsView}>
                <Text style={styles.Labels}>Script maj.</Text>
              </View>
              <View style={styles.SwitchsView}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.props.onScrMajChange}
                  value={this.props.isScrMajOn}
                />
              </View>
            </>
          </View>
          <View style={styles.ChoiceView}>
            <>
              <View style={styles.LabelsView}>
                <Text style={styles.Labels}>Cursive min.</Text>
              </View>
              <View style={styles.SwitchsView}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.props.onCurMinChange}
                  value={this.props.isCurMinOn}
                />
              </View>
            </>
          </View>
          <View style={styles.ChoiceView}>
            <>
              <View style={styles.LabelsView}>
                <Text style={styles.Labels}>Cursive maj.</Text>
              </View>
              <View style={styles.SwitchsView}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.props.onCurMajChange}
                  value={this.props.isCurMajOn}
                />
                {console.log(this.props)}
              </View>
            </>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const iconStyle = {
  back: {
    name: 'arrow-back-ios',
    size: 50,
    color: 'white',
  },
};
const styles = StyleSheet.create({
  Labels: {
    color: Colors.white,
  },
  SwitchsView: {
    //flexDirection: 'row',
    //backgroundColor:'gray',
    alignItems: 'center',
    width: 75,
  },
  LabelsView: {
    //flexDirection: 'row',
    //backgroundColor:'blue',
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    width: 90,
  },
  ChoiceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
  },
  ConfigView: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackView: {
    flex: 1,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
  },
});
