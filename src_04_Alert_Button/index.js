import React, { Component } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';

class Index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert('警告标题', '警告内容', [
      {
        text: '取消',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {
        text: '确认',
        onPress: () => {
          console.log('OK');
        },
        style: 'default',
      },
    ]);
  };
  createThreeButtonAlert = ()=>{
    Alert.alert('更新提示', '发现新版本,是否现在更新', [
      {
        text: '稍后在试',
        onPress: () => console.log('稍后提醒我'),
        style: 'default',
      },
      
      {
        text: '取消',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {
        text: '确认',
        onPress: () => {
          console.log('OK');
        },
        style: 'default',
      },
    ]);
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text>test12331</Text>
        <Button
          title="alert"
          onPress={() => {
            alert('button with adjusted color pressed');
            console.log('这是日志');
          }}
        />
        <Button
          title="Alert.alert"
          onPress={() => {
            Alert.alert('我是一个按钮');
          }}
          color={'red'}
        />

        <Button
          title="两个按钮"
          onPress={this.createTwoButtonAlert}
          color={'green'}
        />

        <Button
          title="三个按钮"
          onPress={this.createThreeButtonAlert}
          color={'tomato'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    }
})

export default Index;
