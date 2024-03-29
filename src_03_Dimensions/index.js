import { Text, StyleSheet, View ,Dimensions} from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>扫一扫</Text>
        </View>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>付款码</Text>
        </View>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>卡包</Text>
        </View>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>出行</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  itemBase: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#00ba89',
    width: Dimensions.get('window').width / 4,
    height: 90,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  h3: {
    textAlign:'center',
    fontSize: 20,
  },
});