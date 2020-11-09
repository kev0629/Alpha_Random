import React, { Component } from 'react';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

function randomLetter(min=true, maj=false) {
  var result = '';
  var majString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var minString = 'abcdefghijklmnopqrstuvwxyz'
  if (maj==true & min==false){
    var characters = majString
  }
  else if (maj==false & min==true){
    var characters = minString
  }
  else if (maj==true & min==true){
    var characters = minString+majString
  }
  var charactersLength = characters.length;
  for ( var i = 0; i < 1; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomFont(script=true, cursive=true){
  if (script==true & cursive==true){
    var fonts = [null,'Cursive standard']
  }
  if (script==false & cursive==true){
    var fonts = ['Cursive standard']
  }
  if (script==true & cursive==false){
    var fonts = [null]
  }
  result = fonts[Math.floor(Math.random() * fonts.length)];
  return result
}


export default class AlphaView extends Component{
  state = {
    letter: 'Start',
    font: 'Cursive standard'
  };
  
  reload(){
    this.setState(
      { letter: randomLetter(min=true, maj=true),
      font: randomFont(script=true, cursive=true)}
      )
  }
    render(){
      return(
        <View style={styles.TotalView}>
          <View style = {styles.AlphaView}>
            <Text style={[styles.AlphaText,{fontFamily: this.state.font}]}>
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
          <View >
            <Button
            type="clear"
              icon={
                <ConfigIcon/>
              }
            buttonStyle={{ justifyContent: 'flex-end' }}
            />
          </View>
          
        </View>
        
      )}
};

function ConfigIcon(){
  return(
    <Icon
      name="cog"
      size={50}
      color="white"
    />)
}

const iconStyle = {
  refresh:{
              name: "refresh",
              size: 50,
              color: "white"
            },
  config:{
            name: "cog",
            size: 50,
            color: "white"
            },           
}

letterStyle = function() {
  return {
    color: Colors.white,
    fontSize: 100,
    textAlign:'center',
    padding:50,
    //fontFamily:'Cursive standard'
  }
}

const styles = StyleSheet.create({
  AlphaText: {
    color: Colors.white,
    fontSize: 150,
    textAlign:'center',
    padding:50,
    //fontFamily:'Cursive standard'
  },
  RefreshButton:{
    //backgroundColor: 'red',
  },
  configButton:{
    textAlign:'right'
  },
  AlphaView:{
    //backgroundColor:'blue',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TotalView:{
    // backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    }
});