import { Text, StyleSheet, View ,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={()=>alert('Pressed!')}
        >
            <View style={[styles.item]}>
                <Text>触碰高亮</Text>
            </View>
        </TouchableHighlight>

        <TouchableOpacity
        onPress={()=>alert('触碰透明度变化!')}
        >
            <View style={[styles.item]}>
                <Text>触碰透明度变化</Text>
            </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback
        onPress={()=>alert('触碰透无变化!')}
        >
            <View style={[styles.item]}>
                <Text>触碰透无变化</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        marginBottom:10,
        padding:10,
        borderWidth:1,
        borderColor:'red'
    }
})