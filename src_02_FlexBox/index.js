import { Text, StyleSheet, View ,ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={{height:'100%'}}>
        <Text style={[styles.h2]}>主轴方向</Text>
        <ScrollView>
          <Text style={[styles.h3]}>flexDirection:'column'(默认)</Text>
          <View style={[styles.container]}>
            <Text style={[styles.itemBase]}>11111</Text>
            <Text style={[styles.itemBase]}>22222</Text>
            <Text style={[styles.itemBase]}>33333</Text>
          </View>

          <Text style={[styles.h3]}>flexDirection:'column-reverse'</Text>
          <View style={[styles.container, styles.flexColumnReverse]}>
            <Text style={[styles.itemBase]}>11111</Text>
            <Text style={[styles.itemBase]}>22222</Text>
            <Text style={[styles.itemBase]}>33333</Text>
          </View>

          <Text style={[styles.h3]}>flexDirection:'row'</Text>
          <View style={[styles.container, styles.flexRow]}>
            <Text style={[styles.itemBase]}>11111</Text>
            <Text style={[styles.itemBase]}>22222</Text>
            <Text style={[styles.itemBase]}>33333</Text>
          </View>

          <Text style={[styles.h3]}>flexDirection:'row-reverse'</Text>
          <View style={[styles.container, styles.flexRowReverse]}>
            <Text style={[styles.itemBase]}>11111</Text>
            <Text style={[styles.itemBase]}>22222</Text>
            <Text style={[styles.itemBase]}>33333</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection:'row-reverse'</Text>
          <View style={[styles.container, styles.flexRowReverse]}>
            <Text style={[styles.itemBase]}>11111</Text>
            <Text style={[styles.itemBase]}>22222</Text>
            <Text style={[styles.itemBase]}>33333</Text>
          </View>
        </ScrollView>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
    container:{
        height:150,
        margin:10,
        borderWidth:1,
        borderWidth:1,
        borderColor:'#ddd',

    },
    h2:{
        fontSize:24,
        marginHorizontal:10
    },
    h3:{
        fontSize:24,
        marginHorizontal:10
    },
    itemBase:{
        height:30,
        borderWidth:1,
        borderColor:'red',
        backgroundColor:'#dfb',
        padding:4,
        textAlign:'center'
        
    },
    flexColumn:{
        flexDirection:'column',
    },
    flexColumnReverse:{
        flexDirection:'column-reverse'
    },
    flexRow:{
        flexDirection:'row'
    },
    flexRowReverse:{
        flexDirection:'row-reverse'
    }

})