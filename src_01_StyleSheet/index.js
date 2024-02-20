import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}> textInComponent333 33</Text>
        <Text style={[{color:'red'},{color:'green'}]}> textInComponent333 33</Text>

        <Text style={[styles.h1]} >RN</Text>
        <Text style={[styles.h2]} >RN</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    h1:{
        fontSize:42,
        fontWeight:'bold'
    },
    h2:{
        fontSize:30,
        fontWeight:'bold'
    }
})
