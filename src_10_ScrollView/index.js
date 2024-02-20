import { Text, StyleSheet, View ,ScrollView, Platform ,SafeAreaView} from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
    <SafeAreaView>
        <ScrollView
        styles={{backgroundColor:'#dfb'}}
        horizontal={true}
        >
            <Text style={[styles.nav]}>新闻</Text>
            <Text style={[styles.nav]}>体育</Text>
            <Text style={[styles.nav]}>娱乐</Text>
            <Text style={[styles.nav]}>财经</Text>
            <Text style={[styles.nav]}>军事</Text>
            <Text style={[styles.nav]}>新闻</Text>
            <Text style={[styles.nav]}>时尚</Text>
            <Text style={[styles.nav]}>科技</Text>
        </ScrollView>

        <ScrollView
        style={[styles.scrollView]}
        contentContainerStyle={{margin:30}}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.text]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed perferendis veniam odio alias? Repellendus quos nostrum odio, adipisci nesciunt incidunt eligendi reprehenderit magnam officia harum deserunt eaque, magni itaque, distinctio doloremque vel doloribus inventore pariatur repellat commodi? Excepturi dolor, minus et, fugiat architecto repudiandae culpa quasi itaque laudantium animi, eligendi atque. Suscipit, ipsa temporibus a doloremque officia debitis provident cumque cupiditate totam quisquam optio quidem ullam? Iusto necessitatibus dolorum libero nulla odit modi quas at distinctio voluptate corporis ducimus repudiandae perferendis neque, magnam dolorem sunt eius facere vero, quae in, rem fugit? Dolore magni perspiciatis perferendis cumque eos cum.</Text>
        {/* 解决 ScrollView 在Android 下 ，滚动不到底的问题 */}
        <View style={{height: Platform.OS === 'ios'?0 :100 }}></View>
      </ScrollView>
    </SafeAreaView>
      
    )
  }
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
    },
    scrollView:{
        backgroundColor:'#ddd',
        marginHorizontal:20,
    },
    nav:{
        margin:10,
        height:50,
        fontSize:30
    }
})