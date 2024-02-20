import {Text, StyleSheet, View, StatusBar, Switch} from 'react-native';
import React, { Component } from 'react'

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      hideStatusBar: false,
    };
  }
  toggleStatusBar=()=>{
    this.setState({
      hideStatusBar:!this.state.hideStatusBar
    })
  }
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar
          hidden={this.state.hideStatusBar}
          backgroundColor="red"
          barStyle={'light-content'}
          bool={true}
        />
        <Switch
          trackColor={{false: '#999', true: '#666'}}
          thumbColor={this.state.hideStatusBar?"red":"white"}
          value={this.state.hideStatusBar}
          onValueChange={this.toggleStatusBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})