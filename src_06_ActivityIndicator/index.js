import { StyleSheet, Text, View ,ActivityIndicator , Platform} from 'react-native'
import React from 'react'

export default function index() {
    if(Platform.OS === 'android'){
        alert('当前是安卓应用')
    }else if(Platform.OS === 'ios'){
        alert('当前应用是 iOS')
    }
  return (
    <View style={[styles.container]}>
      <Text>index</Text>
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      <ActivityIndicator color="#00ff00" size={'large'} />
      <ActivityIndicator color="red" size={'70'} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
        alignItems:'center'
    }
})